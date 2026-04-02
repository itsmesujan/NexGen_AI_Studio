import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Input validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100)
    .trim(),
  email: z.string().email("Invalid email address").max(254).toLowerCase().trim(),
  service: z.string().min(1, "Please select a service").max(100),
  budget: z.string().max(100).optional(),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(5000)
    .trim(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate & sanitize input
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, service, budget, message } = parsed.data;

    // If Resend API key is configured, send the email
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      await resend.emails.send({
        from: "NexGen AI Studio <noreply@nexgenai.studio>",
        to: [process.env.CONTACT_EMAIL ?? "hello@nexgenai.studio"],
        replyTo: email,
        subject: `New Project Inquiry — ${service}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f1f5f9; padding: 32px; border-radius: 12px;">
            <h1 style="color: #6366f1; margin-bottom: 8px;">New Project Inquiry</h1>
            <p style="color: #94a3b8; margin-bottom: 24px;">Someone wants to build something awesome.</p>
            
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #94a3b8; width: 120px;">Name</td><td style="padding: 8px 0; color: #f1f5f9; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #94a3b8;">Email</td><td style="padding: 8px 0; color: #6366f1;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #94a3b8;">Service</td><td style="padding: 8px 0; color: #f1f5f9;">${service}</td></tr>
              ${budget ? `<tr><td style="padding: 8px 0; color: #94a3b8;">Budget</td><td style="padding: 8px 0; color: #f1f5f9;">${budget}</td></tr>` : ""}
            </table>
            
            <hr style="border-color: #1e1e2e; margin: 24px 0;" />
            
            <h3 style="color: #94a3b8; font-size: 14px; margin-bottom: 8px;">MESSAGE</h3>
            <p style="color: #f1f5f9; line-height: 1.7; background: #12121a; padding: 16px; border-radius: 8px; border: 1px solid #1e1e2e;">${message.replace(/\n/g, "<br>")}</p>
            
            <p style="color: #475569; font-size: 12px; margin-top: 32px;">Sent via NexGen AI Studio contact form</p>
          </div>
        `,
      });
    } else {
      // Log to console in development when no API key is set
      console.log("Contact form submission (no Resend API key configured):", {
        name,
        email,
        service,
        budget,
        message,
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
