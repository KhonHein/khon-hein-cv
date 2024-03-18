
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Passport from '../../public/images/me.png'
import CardItem from './CardItem'
import { tests } from '@/data/skills'


const Testimonial = () => {
  return (
    <Box id='testimonials' sx={{my:'1rem',animation:'zoomIn .5s linear'}}>
      <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',m:'auto',alignItems:'center'}}>
        <Typography>Background History</Typography>
        <Typography>Who am I ?</Typography>
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',flexWrap:'wrap',m:'.5rem'}}>
        {tests&&tests.map((item,index)=>
        <CardItem key={index}
        Icon={item.icon}
        title={item.title}
        name={item.name}
        caption={item.caption}
        />)}
      </Box>
    </Box>
  )
}

export default Testimonial