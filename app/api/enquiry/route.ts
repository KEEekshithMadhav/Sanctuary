import { NextRequest, NextResponse } from "next/server";

// ============================================================
// ENQUIRY API ROUTE
// Leads are automatically forwarded to the connected Google Sheet
// via the Google Apps Script Webhook.
// ============================================================

const GOOGLE_SHEETS_WEBHOOK_DEFAULT =
  "https://script.google.com/macros/s/AKfycbxzyuAF7pyuFiiIU9hAVekXEJt4ToScKvoMfjTwpcub9L4pi9XCPFwcUtz81qWOU4mwQQ/exec";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic server-side validation
    if (!body.name || !body.mobile || !body.enquiryType) {
      return NextResponse.json(
        { error: "Name, mobile and enquiry type are required" },
        { status: 400 }
      );
    }

    // Mobile validation
    const mobileClean = body.mobile.replace(/\s+/g, "").replace(/^(\+91|91)/, "");
    if (!/^[6-9]\d{9}$/.test(mobileClean)) {
      return NextResponse.json(
        { error: "Invalid Indian mobile number" },
        { status: 400 }
      );
    }

    const leadData = {
      timestamp: new Date().toISOString(),
      project: "SouthPride Sanctuary",
      name: body.name,
      mobile: body.mobile,
      email: body.email || "",
      plotSize: body.plotSize || "",
      budget: body.budget || "",
      enquiryType: body.enquiryType,
      enquirySubType: body.enquirySubType || "",
      message: body.message || "",
      source: body.source || "Website",
    };

    // Forward to Google Sheets webhook
    const webhookUrl =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL || GOOGLE_SHEETS_WEBHOOK_DEFAULT;

    if (webhookUrl) {
      try {
        const sheetResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
          redirect: "follow",
        });

        if (!sheetResponse.ok) {
          console.error(
            "Google Sheets webhook response not OK:",
            sheetResponse.status,
            await sheetResponse.text()
          );
        }
      } catch (sheetErr) {
        console.error("Google Sheets webhook forwarding error:", sheetErr);
        // Do not fail user submission if webhook has transient network/permission issue
      }
    } else {
      console.log("New Enquiry Lead:", leadData);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please call or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
