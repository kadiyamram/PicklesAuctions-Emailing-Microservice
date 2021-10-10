import EmailDeliveryServiceContract from "./contracts/EmailContract";
import * as nodemailer from 'nodemailer';
import Email from "../models/email";
import { resolve } from "path";
export default class NodeMailerService extends EmailDeliveryServiceContract{
    transporter: any;
    constructor(){
        super();
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
              user: process.env.userName,
              pass: process.env.password,
            }
          });
    }
    public sendMail(email: Email):Promise<any> {
        let mailOptions = {
            from: process.env.from,
            to: email.To,
            cc:email.Cc,
            bcc:email.Bcc,
            subject: email.Subject,
            text: email.Body 
          };
        return new Promise<any>((resolve, reject)=>{
            this.transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                  console.log("Error=>", err);
                  reject(err);
                  return;
                } 
                console.log("Email sent successfully");
                resolve(data);
            });
        })
       
    }

}


//Access for less secure apps has been turned on
  

  