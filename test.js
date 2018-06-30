import QuickMailer, { EmailProviders } from "./src";

let emailService = new QuickMailer.Builder()
                              .setEmailService(EmailProviders.GMAIL)
                              .setEmailAccount('testestopados@gmail.com')
                              .setPasswordAccount("@engappvaca505")
                              .build();

const content = "<b>olarrr 🐴</b><img src='https://lh3.googleusercontent.com/SeW69IEezR1Q4VCTKH918Vz_zpyDPDe9fQ4cMEo_KqEA6r3_uffcO7a7_Yxi4DcA0NGqmq_KyLaJq40Xv5nNHY8q'/>";
const c1 = "OI";

const f = async () => {
    try {
        emailService.deliverTo("abmf@ic.ufal.br")
                    .withSubject("VAMO GALo")
                    .setEmailContent(content, true)
                    .send();
    } catch (e) {
        console.log("SOMETHING WENT WRONG");
    }
}

f();
