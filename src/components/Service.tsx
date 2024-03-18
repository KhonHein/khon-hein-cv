import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import PP from '../../public/images/servic.png'
import CVPP from '../../public/images/khon.jpg'
const Service = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',my:'1rem',width:'90vw',flexDirection:'column',}}>
        <Box sx={{display:'flex',p:'1rem',justifyContent:'center',
        flexWrap:'wrap',
        animation: 'moveRight 1s linear',
        }}>

            <Box sx={{display:'flex',width:500,p:'1rem',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{my:'.5rem'}}>An Interactive Designer</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse ea debitis expedita commodi natus dolorum adipisci corrupti, molestiae incidunt exercitationem.
                </Typography>
                <Box sx={{my:'.5rem'}}>
                    <Button>Learn </Button>
                    <Button>More </Button>
                </Box>

            </Box>
            <Box sx={{display:'flex',justifyContent:'center',width:200,height:200,
                borderRadius:'50%',overflow:'hidden'
                }}>
                <Image width={200} src={PP} alt='pp'
                style={{animation:'zoomIn .5s linear'}}
                />
            </Box>
        </Box>

        <Box sx={{display:'flex',p:'1rem',justifyContent:'center',
        flexWrap:'wrap',
        animation: 'moveLeft 1s linear',
        }}>
           <Box sx={{width:'100%',m:'2rem auto'}}>
            <Typography sx={{display:'flex',justifyContent:'center'}}>Biography</Typography>
           </Box>
            <Box sx={{display:'flex',justifyContent:'center',width:350,
                borderRadius:'.5rem',overflow:'hidden',alignItems:'center'
                }}>
                <Image width={350} style={{animation:'zoomOut 1s linear'}} src={CVPP} alt='pp'/>
            </Box>
            <Box sx={{display:'flex',width:500,p:'1rem',justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{my:'.5rem'}}>An Interactive Designer</Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse ea debitis expedita commodi natus dolorum adipisci corrupti, 
                    molestiae incidunt exercitationem.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse ea debitis expedita commodi natus dolorum adipisci corrupti, 
                    molestiae incidunt exercitationem.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse ea debitis expedita commodi natus dolorum adipisci corrupti, 
                    molestiae incidunt exercitationem.
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Esse ea debitis expedita commodi natus dolorum adipisci corrupti, 
                    molestiae incidunt exercitationem.
                </Typography>
                <Box sx={{my:'.5rem'}}>
                    <Button>Learn </Button>
                    <Button>More </Button>
                </Box>

            </Box>
        </Box>
    </Box>
  )
}

export default Service