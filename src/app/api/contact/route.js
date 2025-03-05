import pool from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"
import nodemailer from "nodemailer"


export async function POST(request) {
    try {
        const formData = await request.formData();
        const name = formData.get("name");
        const phone = formData.get("phone");
        const email = formData.get("email");
        const message = formData.get("message");
        const location = formData.get("location");
        const medicalReport = formData.get("medicalReport");

        const unique_id = uuidv4();
        const [results] = await pool.query(
            "INSERT INTO contact(date, id, name, phone, email, location, message, medicalReport) VALUES(NOW(), ?, ?, ?, ?, ?, ?, ?)",
            [unique_id, name, phone, email, location, message, medicalReport ? medicalReport.name : ""]
        );

        // Send email using nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            secure: true,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASSWORD
            },
        });

        // Send email to admin
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: "Dr Sajjan Rajpurohit Contact Form",
            html:
                `<html>
                   <body>
                      <h3>You've got a new mail from ${name}, their email is: ✉️${email} And phone Number is ${phone} </h3>
                      <p>Message:</p>
                      <p>${message}</p>
                    </body>
                </html>`,
            attachments: medicalReport ? [{
                filename: medicalReport.name,
                content: Buffer.from(await medicalReport.arrayBuffer()),
            }] : []
        });

        // Send confirmation email to the user
        await transporter.sendMail({
            from: process.env.MY_EMAIL,
            to: email,
            subject: "Thankyou for contacting Dr. Sajjan Rajpurohit.",
            html: `<html>
              <body>
                <h2>Hey ${name}!</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
        });

        //Return success response
        return NextResponse.json({
            message: "Message Sent",
            success: true,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to send query",
            success: false
        });
    }
}