import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // console.log("🚀 API route hit"); // Debug
    const { name, email, message } = await req.json();
    // console.log("📨 Incoming:", { name, email, message });

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true if port = 465, false if 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "singhdaljeet8637@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b><br/> ${message}</p>`,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Email error:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500 }
    );
  }
}
