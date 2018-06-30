class EmailBodyFactory {
    constructor(email) {
        this.email  = email;
    }

    /**
     * If isRequiringHTML is true, it builds a body for HTML
     * response, else, for text.
     *
     * @param isRequiringHTML
     * @return email body
     */
    getEmailBody(isRequiringHTML) {
        if(!isRequiringHTML)
            return {
                from: this.email.emailAccount,
                to: this.email.destinationEmail,
                subject: this.email.emailSubject,
                text: this.email.emailContent,
            };
        return {
            from: this.email.emailAccount,
            to: this.email.destinationEmail,
            subject: this.email.emailSubject,
            html: this.email.emailContent,
        };
    }
}

export default EmailBodyFactory;
