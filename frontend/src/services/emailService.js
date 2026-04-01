const templateMap = {
  applicationReceived: '/src/templates/emails/applicationReceived.html',
  interviewScheduled: '/src/templates/emails/interviewScheduled.html',
  rejectionEmail: '/src/templates/emails/rejectionEmail.html',
};

const fillTemplate = (html, data = {}) =>
  Object.entries(data).reduce((acc, [key, value]) => acc.replaceAll(`{{${key}}}`, String(value)), html);

/**
 * Demo email service abstraction.
 * Can be replaced later with SendGrid/Nodemailer transport calls.
 */
export const emailService = {
  async renderTemplate(templateName, data) {
    const path = templateMap[templateName];
    const raw = await fetch(path).then((res) => res.text());
    return fillTemplate(raw, data);
  },

  async sendEmail({ to, subject, templateName, data }) {
    const html = await this.renderTemplate(templateName, data);
    return {
      transport: 'demo-local',
      to,
      subject,
      html,
      queuedAt: new Date().toISOString(),
    };
  },
};

export default emailService;
