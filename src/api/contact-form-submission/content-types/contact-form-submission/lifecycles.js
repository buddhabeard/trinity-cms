module.exports = {
  async afterCreate(event) {
    console.log(event.params);
    try {
      await strapi.plugins["email"].services.email.send({
        to: "engage@trinitylifeministry.com",
        from: "engage@trinitylifeministry.com", // e.g. single sender verification in SendGrid
        replyTo: "engage@trinitylifeministry.com",
        subject: "Trinity Life Ministry - Contact Form Submission",
        text: event.params.message,
        html: "",
      });
    } catch (err) {
      console.log(err);
    }

    try {
      await strapi.plugins["email"].services.email.send({
        to: event.params.email,
        from: "engage@trinitylifeministry.com", // e.g. single sender verification in SendGrid
        replyTo: "engage@trinitylifeministry.com",
        subject: "Thank you for contacting Trinity Liife Ministry",
        text: "We have received your information and will be in contact within the next 48 hours. Thank you for reaching out!",
        html: "",
      });
    } catch (err) {
      console.log(err);
    }
  },
};
