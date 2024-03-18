

import ME from '../../public/images/me1.jpg'
import Image from 'next/image';

import { Box, Button, Typography } from '@mui/material';
import { aboutDescription, hobies } from '@/data/about';



const About = () => {
  return (
    <Box id='about' sx={{m:'1rem',
    }}>
      <Box sx={{display:'flex',justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      animation:'moveDown 1s linear'}}>
        <Typography>Get To Know </Typography>
        <Typography>About Me </Typography>
      </Box>

      <Box
       sx={{display:'flex',
       justifyContent:'space-around',
       alignItems:'center',width:'90vw',flexWrap:'wrap',
       animation:'moveRigit 1s linear'
       }}>
        <Box className="about_me_img"
        sx={{
            bgcolor:'#141439',
            borderRadius:'.5rem',
            transform: 'rotate(-5deg)',
            transition: 'transform 0.5s ease-in-out',
            animation:'moveRight 1s linear',
            p:'.2rem', display:'flex',justifyContent:'center',m:'1rem',
            '&:hover': {
                transform: 'rotate(0deg)', // Rotate the element on hover
              },
              
            }}>
                    
          <Image 
          style={{
            borderRadius:'.5rem',
            animation:'zoomIn .5s linear'
            }} width={250} src={ME} alt="About img " />
        </Box>
        <Box sx={{width:'70%',animation:'moveLeft 1s linear'}}>
          <Box className="about_cards" sx={{display:'flex',
          justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
            {hobies&&hobies.map((item,index)=>
            <Box key={index} sx={{
                cursor:'pointer',
                border:'1px solid white',
                display:'flex',justifyContent:'center',
                alignItems:'center',flexDirection:'column',p:'1rem',
                borderRadius:'.5rem',
                m:'.2rem',
                bgcolor:'#141439',
                ':hover':{bgcolor:'transparent'}
                }}
                >
              <item.icon className='about_icon'/>
              <h5>{item.name}</h5>
              <small>{item.caption}</small>
            </Box>
            )}
          </Box>

          <Box sx={{width:'100%',my:'.5rme',animation:'moveUp 1s linear'}}>
          <Typography sx={{m:'.2rem',}}>{aboutDescription}</Typography>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',my:'1rem'}}>
            <Button variant='outlined' sx={{m:'.5rem',color:'yellow'}}>Talk</Button>
            <Button variant='outlined' sx={{m:'.5rem',color:'yellow'}}>Certificate</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default About