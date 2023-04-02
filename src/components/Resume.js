import React from 'react';
import { Container, Paper, Grid } from '@material-ui/core';
import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';

const Resume = () => {
  return (
    <Container maxWidth="md" id="resume" className="resume">
      <Paper>
        <Header />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Skills />
            <Education />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Experience />
            <Certification />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Resume;
