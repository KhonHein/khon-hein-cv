
import LaptopMacIcon from '@mui/icons-material/LaptopMac';

import { skillsBackend, skillsFrontend } from "@/data/skills";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Image from 'next/image';

import proPP from '../../public/images/code.svg'
import frontEndSvg from '../../public/images/frontend.svg'
import dataServerSvg from '../../public/images/dataserver.svg'

const Experience = () => {
const isMobile = useMediaQuery('(max-width: 700px)'); 
  return (
    <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
      
      <Box sx={{borderRadius:'50%',animation:'zoomIn 1s linear'}}>
        <Image width={200}  src={dataServerSvg} alt='profile'/>
      </Box>

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
          width:'100%',
          minHeight:'auto',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',flexWrap:'wrap',
          animation:'moveRight 1s linear',
          }}>
            <Box sx={{
              display:'flex',justifyContent:'space-between',flexWrap:'wrap',
              width:`${!isMobile&&'50%'}`
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
            <Box sx={{borderRadius:'50%',my:'1rem',
            animation:'zoomIn 1s linear'}}>
              <Image width={200}  src={frontEndSvg} alt='profile'/>
            </Box>
        </Box>

        <Box  sx={{
          width:'100%',
          minHeight:'auto',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',flexWrap:'wrap',
          animation:'moveRight 1s linear',
          }}>
            <Box sx={{borderRadius:'50%',my:'1rem',
            animation:'zoomIn 1s linear'}}>
              <Image width={200}  src={proPP} alt='profile'/>
            </Box>
            <Box sx={{
              display:'flex',justifyContent:'space-between',flexWrap:'wrap',
              width:`${!isMobile&&'50%'}`
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
        {/* End of Front End  */}
      </Box>
    </Box>
  );
};

export default Experience;
