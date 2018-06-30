import NodeMailer from "nodemailer";
import EmailBodyFactory from "./EmailBodyFactory";

const EmailProviders = {"GMAIL":"Gmail", "HOTMAIL":"Hotmail"};
Object.freeze(EmailProviders);

class QuickMailer {
   constructor(build) {
     this.emailService = build.emailService;
     this.emailAccount = build.emailAccount;
     this.passwordAccount = build.passwordAccount;

     this.transporter = NodeMailer.createTransport({
       service: this.emailService,
       auth: {
         user: this.emailAccount,
         pass: this.passwordAccount,
       }
     });

     this.destinationEmail = "";
     this.emailSubject = "";
     this.emailContent = "";
     this.asHTML = false;
   }

   deliverTo(destinationEmail) {
     this.destinationEmail = destinationEmail;
     return this;
   }

    withSubject(emailSubject) {
      this.emailSubject = emailSubject;
      return this;
    }

    setEmailContent(emailContent, asHTML = false) {
      this.emailContent = emailContent;
      this.asHTML = asHTML;
      return this;
    }

    async send() {
        const emailBodyFactory = new EmailBodyFactory(this);
        const emailBody = emailBodyFactory.getEmailBody(this.asHTML);
        try {
            await this.transporter.sendMail(emailBody);
        } catch (e) {
            throw new Error(e.message);
        }
    }

     static get Builder() {
        class Builder {
           constructor() {}

           setEmailService(emailService) {
              this.emailService = emailService;
              return this;
           }

           setEmailAccount(emailAccount) {
              this.emailAccount = emailAccount;
              return this;
           }

           setPasswordAccount(passwordAccount) {
             this.passwordAccount = passwordAccount;
             return this;
           }

           build() {
              return new QuickMailer(this);
           }
        }
        return Builder;
     }
}

export { EmailProviders };
export default QuickMailer;
