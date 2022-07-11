import emailjs from '@emailjs/browser';

export const sendEmail = (e) => {
  e.preventDefault();

  serviceId = process.env.YOUR_SERVICE_ID;
  templateId = process.env.YOUR_TEMPLATE_ID;
  publicKey = process.env.YOUR_PUBLIC_KEY;

  emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};