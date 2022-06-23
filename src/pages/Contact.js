import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleForm = e => {
    setForm(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  }

  const handleClear = e => {
    setForm({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    handleClear();    
  };

  return (
    <section className="page" id="contact">
      <article>
        <Typography variant="h2" className="header">Let's get in touch!</Typography>
        <Grid container spacing={3} sx={{justifyContent: 'center'}}>
          <Grid item xs={6} sm={4}>
            <TextField className="form-textfield" fullWidth id="name" label="Name" value={form.name} onChange={handleForm} />
          </Grid>
          <Grid item xs={6} sm={4}>
            <TextField className="form-textfield" fullWidth id="email" label="Email" value={form.email} type="email" onChange={handleForm} />
          </Grid>
          <Grid item xs={9} sm={8}>
            <TextField className="form-textfield" fullWidth id="message" label="Message" value={form.message} multiline rows={4} onChange={handleForm} />
          </Grid>
          <Grid item xs={8}>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
              <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
              <Button variant="outlined" onClick={handleClear}>Reset</Button>
            </Box>
          </Grid>
        </Grid>
      </article>
    </section>
  );
}

export default Contact;
