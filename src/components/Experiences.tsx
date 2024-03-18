
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import { skillsBackend, skillsFrontend } from "@/data/skills";
import { Box, Typography } from "@mui/material";
import Image from 'next/image';

import proPP from '../../public/images/me.png'
import Testimonial from './Testimonials';
const Experience = () => {

  return (
    <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      
      <Box sx={{width:300,height:300,borderRadius:'50%',my:'1rem',animation:'zoomIn 1s linear'}}>
        <Image width={300} style={{borderRadius:'50%'}} src={proPP} alt='profile'/>
      </Box>
      <Testimonial/>
      <Box className="progressbar-title" style={{ width: "50vw",margin:'0 auto',animation:'zoomIn 1s linear'}}>
      <Typography sx={{display:'flex',justifyContent:'center'}}>What Skills I Have </Typography>
      <Typography sx={{display:'flex',justifyContent:'center'}}>My Experience </Typography>
        <h5 style={{ display: "flex", justifyContent: "center" }}>
        </h5>
        <progress
          
          max="100"
          style={{ width: "100%", height: "4px"}}
        />
      </Box>

      <Box sx={{width:'100vw',display:'flex',justifyContent:'center',flexWrap:'wrap',
      }}>
        <Box  sx={{
          width:'40vw',
          minHeight:'60vh',
          display:'flex',
          flexDirection:'column',alignItems:'center',flexWrap:'wrap',
          border:'1px solid white',borderRadius:'2rem',p:'.5rem',m:'.5rem',
          bgcolor:'#141439',
          animation:'moveRight 1s linear',
          ':hover':{bgcolor:'transparent'}
          }}>
          <Typography sx={{m:'.5rem'}}>Frontend Development</Typography>
          <Box sx={{
            display:'flex',justifyContent:'space-between',flexWrap:'wrap',
          }}>
            {skillsFrontend.map(({ language, status, percent }, index) => {
              return (
                <Box
                  key={index}
                  sx={{cursor:'pointer',
                  width:'auto',display:'flex',m:'.5rem',
                  border:'1px solid white',
                  p:'.5rem',
                  flexWrap:'wrap',
                  bgcolor:'#1B1A55',
                  borderRadius:'.5rem',
                  ':hover':{bgcolor:'transparent',color:'yellow'}
                }}
                  
                >
                  <LaptopMacIcon sx={{mx:'.5rem'}}/>
                  <Box>
                    <Typography>{language}</Typography>
                    <small className="text-light">{status}</small>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box  sx={{
          width:'40vw',
          display:'flex',
          flexDirection:'column',alignItems:'center',flexWrap:'wrap',
          border:'1px solid white',borderRadius:'2rem',p:'.5rem',m:'.5rem',
          bgcolor:'#141439',
          animation:'moveLeft 1s linear',
          ':hover':{bgcolor:'transparent'}
          }}>
          <Typography sx={{m:'.5rem'}}>BackEnd Development</Typography>
          <Box sx={{
            display:'flex',justifyContent:'space-between',flexWrap:'wrap',
          }}>
            {skillsBackend.map(({ language, status, percent }, index) => {
              return (
                <Box
                  key={index}
                  sx={{cursor:'pointer',
                  width:'auto',display:'flex',m:'.5rem',
                  border:'1px solid white',
                  p:'.5rem',
                  flexWrap:'wrap',
                  bgcolor:'#1B1A55',
                  borderRadius:'.5rem',
                  ':hover':{bgcolor:'transparent',color:'yellow'}
                }}
                  
                >
                  <DynamicFormIcon sx={{mx:'.5rem'}}/>
                  <Box>
                    <Typography>{language}</Typography>
                    <small className="text-light">{status}</small>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* End of Front End  */}
      </Box>
    </Box>
  );
};

export default Experience;
