import { NextRequest, NextResponse } from "next/server";

// ============================================================
// ENQUIRY API ROUTE
// Configure the GOOGLE_SHEETS_WEBHOOK_URL environment variable
// to send leads to a Google Sheet via Apps Script webhook,
// or replace this handler with your preferred CRM integration.
// ============================================================

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

    // Forward to Google Sheets webhook (configure in .env.local)
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      const sheetResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });
      if (!sheetResponse.ok) {
        console.error("Google Sheets webhook failed:", await sheetResponse.text());
        // Don't fail the request — log and continue
      }
    } else {
      // Log to console in development (replace with your preferred logging)
      console.log("New Enquiry Lead:", leadData);
    }

    // TODO: Add WhatsApp notification or email alert here
    // TODO: Add CRM integration (e.g., Zoho, Salesforce, HubSpot)

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
