import nodemailer from 'nodemailer';
import fs from "fs"
let path = "./Models/products.json"


let handler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { email, name, phoneNo, Address,zip,State } = req.body.CheckOut;
      let {Subtotal,products} = req.body
      console.log(email, name, phoneNo, Address,zip,State,Subtotal,products);
       // Check for missing fields
  if (!email || !name || !phoneNo || !Address  || !zip || !State || !Subtotal || !products || products.length ===0 ) {
    return res.status(404).json({msg:"Invalid Data",success:false})
    
  }
      // fs.readFile(path,"utf-8",(err,data)=>{
      //   if(err){
      //     return res.status(404).json({success:false,msg:"Error Occur"})
      //   }else{
      //     let parseData = JSON.parse(data)
      //     let frontData = products.map(frontDatas =>{
      //       let tempered = parseData.find(items  => items.id === frontDatas.id)
      //       console.log(tempered);
      //       if(tempered.price !== frontDatas.processedPrice){
      //           return res.status(404).json({msg:"Tempered Data",success:false})
      //       }
      //     })

      //   }
      // })

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NEXT_PUBLIC_EMAIL, // your Gmail address
          pass: process.env.NEXT_PUBLIC_PASSWORD // your Gmail password
        }
      });

      // Format the products array into an HTML table
      const productDetails = products.map(product => `
        
        <tr>
          <td>${product.id}</td>
          <td><a href=${process.env.NEXT_PUBLIC_HOST+"/productsDetails/Id="+encodeURIComponent(product.name)}>
          Detail
          </a></td>
          <td>${product.qty}</td>
        </tr>
      `).join('');

      const emailContent = `
        <h1>New Order Details</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNo}</p>
        <p><strong>Address:</strong> ${Address}</p>
      <p><strong>State:</strong> ${State}</p>
<p><strong>zip:</strong> ${zip}</p>


        <p><strong>Subtotal:</strong> ${Subtotal}</p>
        <h2>Products:</h2>
        <table border="1" cellpadding="5" cellspacing="0">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            ${productDetails}
          </tbody>
        </table>
      `;

      let emailOpt = {
        from: email,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: "You Got a New Order",
        html: emailContent
      };

      transporter.sendMail(emailOpt, (error, msg) => {
        if (error) {
          console.log(error);
          return res.status(404).json({ msg: "Email Not Sent", success: false });
        } else {
          return res.status(200).json({ msg: "Thanks For Your Trust Your Order Has Benn Submitted", success: true });
        }
      });
    } else {
      return res.status(404).json({ success: false, msg: "Your Order Not Submitted" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Some internal Error Occured", success: false });
  }
}

export default handler;
