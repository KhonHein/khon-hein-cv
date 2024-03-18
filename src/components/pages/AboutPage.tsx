import { Box } from '@mui/material'
import React from 'react'
import About from '../About'
import Experience from '../Experiences'
import Contact from '../Conatct'
import Testimonial from '../Testimonials'


const AboutPage = () => {
  return (
    <Box sx={{minHeight:'80vh',my:'1rem'}}>
        <About/>
        <Box sx={{animation:'moveUp 1s linear'}}>
          <Testimonial/>
        </Box>

        <Contact/>

    </Box>
  )
}

export default AboutPage