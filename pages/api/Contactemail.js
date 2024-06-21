import nodemailer from 'nodemailer';


let handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email,phoneNo, name,description } = req.body;
    

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL, // your Gmail address
          pass: process.env.NEXT_PUBLIC_PASSWORD // your Gmail password
        }
      });

      let emailContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.5;">
      <h1 style="color: #333;">Order Confirmation</h1>
      <p>Design Requirement From ${name},</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Phone#</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Email</th>

          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${phoneNo}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>

          <td style="border: 1px solid #ddd; padding: 8px;">${description}</td>
        </tr>
      </table>
  
    </div>
      `

      // Format the products array into an HTML table
     

      let emailOpt = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: "You Got a New Order For Custom Design",
        html: emailContent
      };

      transporter.sendMail(emailOpt, (error, msg) => {
        if (error) {
          return res.status(404).json({ msg: "Error Occured", success: false });
        } else {
          return res.status(200).json({ msg: "Thanks For Your Trust Your Query Has Benn Submitted", success: true });
        }
      });
    } else {
      return res.status(404).json({ success: false, msg: "Your Order Not Submitted" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Some internal Error Occured", success: false,error });
  }
}

export default handler;
