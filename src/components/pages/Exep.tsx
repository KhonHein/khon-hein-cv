import React from 'react'
import Experience from '../Experiences'
import { Box } from '@mui/material'
import Contact from '../Conatct'
import Testimonial from '../Testimonials'

const Exep = () => {
  return (
    <Box sx={{minHeight:'80vh',my:'1rem'}}>
      <Experience/>
      <Contact/>
    </Box>
  )
}

export default Exep