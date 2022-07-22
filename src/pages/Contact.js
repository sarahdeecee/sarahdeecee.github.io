import { Button, Card, FormControl, Grid, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const sendEmail = (e) => {
    console.log(e);
    e.preventDefault();

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Email send failed...", error);
        }
      );
  };

  const handleSubmit = e => {
    e.preventDefault();
    sendEmail(e, form);
  };

  return (
    <section className="page" id="contact">
      <article>
        <Typography variant="h2" className="header">Let's get in touch!</Typography>
        <Card sx={{py: 2}}>
        <form id="form-control" ref={form} onSubmit={handleSubmit}>
          <Grid container spacing={3} sx={{justifyContent: 'center'}}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField variant="filled" className="form-textfield" fullWidth id="name" label="Name" value={form.name} name="user_name" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField variant="filled" className="form-textfield" fullWidth id="email" label="Email" value={form.email} name="user_email" type="email" />
            </Grid>
            <Grid item xs={12} sm={9} md={8}>
              <TextField variant="filled" className="form-textfield" fullWidth id="message" label="Message" value={form.message} name="message" multiline rows={4} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                <Button variant="outlined" type="submit">Submit</Button>
              </Box>
            </Grid>
          </Grid>
        </form>
        </Card>
      </article>
    </section>
  );
}

export default Contact;
