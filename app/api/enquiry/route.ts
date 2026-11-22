import { NextRequest, NextResponse } from "next/server";

// ============================================================
// ENQUIRY API ROUTE
// Forwards leads to the connected Google Sheet via Google Apps Script Webhook.
// ============================================================

const GOOGLE_SHEETS_WEBHOOK_DEFAULT =
  "https://script.google.com/macros/s/AKfycbxzyuAF7pyuFiiIU9hAVekXEJt4ToScKvoMfjTwpcub9L4pi9XCPFwcUtz81qWOU4mwQQ/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const rawName = body.name || body.fullName || "";
    const rawMobile = body.mobile || body.mobileNumber || "";
    const rawEmail = body.email || body.emailAddress || "";
    const rawPlotSize = body.plotSize || body.preferredPlotSize || "";
    const rawBudget = body.budget || body.budgetRange || "";
    const rawEnquiryType = body.enquiryType || "Price Enquiry";
    const rawMessage = body.message || body.questionsOrRequirements || "";

    // Basic server-side validation
    if (!rawName.trim() || !rawMobile.trim() || !rawEnquiryType) {
      return NextResponse.json(
        { error: "Full Name, Mobile Number and Enquiry Type are required" },
        { status: 400 }
      );
    }

    // Clean 10-digit Indian mobile number
    const mobileClean = rawMobile.replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    if (!/^[6-9]\d{9}$/.test(mobileClean)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number" },
        { status: 400 }
      );
    }

    // Payload mapped precisely to SouthPride Sanctuary Google Apps Script schema
    const leadPayload = {
      // Exact keys expected by Apps Script doPost(e)
      fullName: rawName.trim(),
      mobileNumber: mobileClean,
      emailAddress: rawEmail.trim(),
      preferredPlotSize: rawPlotSize.trim(),
      budgetRange: rawBudget.trim(),
      enquiryType: rawEnquiryType.trim(),
      questionsOrRequirements: rawMessage.trim(),

      // Additional standard keys for broader CRM/logging compatibility
      name: rawName.trim(),
      mobile: mobileClean,
      email: rawEmail.trim(),
      plotSize: rawPlotSize.trim(),
      budget: rawBudget.trim(),
      message: rawMessage.trim(),
      project: "SouthPride Sanctuary",
      source: body.source || "Website Enquiry Desk",
      timestamp: new Date().toISOString(),
    };

    // Forward to Google Sheets webhook
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL || GOOGLE_SHEETS_WEBHOOK_DEFAULT;

    if (webhookUrl) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload),
          redirect: "follow",
        });

        const responseText = await sheetResponse.text();
        let parsedResult: Record<string, unknown> | null = null;
        try {
          parsedResult = JSON.parse(responseText);
        } catch {
          // Response may be HTML if Google redirected to login
        }

        if (!sheetResponse.ok || (parsedResult && parsedResult.success === false)) {
          console.error("Google Sheets webhook error:", {
            status: sheetResponse.status,
            result: parsedResult || responseText.slice(0, 300),
          });
        } else {
          console.log("Lead forwarded successfully to Google Sheet:", parsedResult?.leadId || "OK");
        }
      } catch (sheetErr) {
        console.error("Google Sheets webhook forwarding exception:", sheetErr);
      }
    } else {
      console.log("No Google Sheets webhook configured. Lead data:", leadPayload);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully. Our sales team will contact you promptly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API internal error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call or WhatsApp our sales desk directly." },
      { status: 500 }
    );
  }
}
