# QuickMailer

This module is build upon the [nodemailer](https://github.com/nodemailer/nodemailer) module and provides a fluent interface to create email delivery servers and to send the emails.

## Adding to node project
```
npm install --save quickmailer
```

## Using in project
### Creating an email service
```
import QuickMailer, { EmailProviders } from "quickmailer";

let emailService = new QuickMailer.Builder()
                                  .setEmailService(EmailProviders.GMAIL)
                                  .setEmailAccount('youremail@gmail.com')
                                  .setPasswordAccount("yourpassword")
                                  .build();
```
### Sending emails
You can send two options of emails: in raw text or in HTML format, which might be useful for customized emails with pictures and colors. 

```
const content = "Hi, dude! How is it going?";

const sendRawText = async () => {
    try {
        emailService.deliverTo("destinyemail@destinyemailprovider.com")
                    .withSubject("Subject")
                    .setEmailContent(content)
                    .send();
    } catch (e) {
        console.log("SOMETHING WENT WRONG");
    }
}

sendRawText();
```
```
const contentInHTMLFormat = "<b>Hello 🐴</b><img src='https://lh3.googleusercontent.com/SeW69IEezR1Q4VCTKH918Vz_zpyDPDe9fQ4cMEo_KqEA6r3_uffcO7a7_Yxi4DcA0NGqmq_KyLaJq40Xv5nNHY8q'/>";

const sendHTMLText = async () => {
    try {
        emailService.deliverTo("destinyemail@destinyemailprovider.com")
                    .withSubject("Subject")
                    .setEmailContent(contentInHTMLFormat, true)
                    .send();
    } catch (e) {
        console.log("SOMETHING WENT WRONG");
    }
}

sendHTMLText();
```

## Bugs
None found yet : )

## Authors
+ [ABuarque](https://github.com/ABuarque)
