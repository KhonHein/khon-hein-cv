import { Box, Button, List, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ppImg from '../../public/images/avatar1.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

import { gitPrjs } from '@/data/skills'
const GitPorj = () => {
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'80vw',m:'auto'}}>
        <Box sx={{display:'flex',justifyContent:'flex-start',flexDirection:'column',m:'1rem'}}>
            <Image src={ppImg} width={100} alt=''style={{borderRadius:'50%',animation:'zoomIn .5s linear'}}/>
            
            <Typography sx={{animation:'moveLeft 1s linear'}}>Rosa Montero , Certify </Typography>
            <Typography sx={{animation:'moveLeft 1s linear'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa recusandae voluptas, cum tempora beatae autem.
            </Typography>
            <Typography sx={{animation:'moveLeft 1s linear'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa recusandae voluptas, cum tempora beatae autem.
            </Typography>

            <Box width={300} sx={{animation:'moveRight 1s linear'}}>
                <Button variant='outlined' sx={{display:'flex',justifyContent:'flex-start',}}>learn</Button>
            </Box>
        </Box>
        <Box sx={{animation:'zoomIn 1s linear',display:'flex',justifyContent:'center',
        flexDirection:'column',alignItems:'center',p:'1rem'}}>
            <Typography sx={{display:'flex',justifyContent:'center'}}>What I Do </Typography>
            <List sx={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',}}>
                {gitPrjs&&gitPrjs.map((item,index)=>
                        <Box key={index} 
                        sx={{display:'flex',justifyContent:'space-between',width:300,height:'auto',m:'.1rem'}}>
                            <Image  src={item.svg} width={100} style={{animation:'zoomIn 2s linear'}} alt=''/>
                            <Box sx={{display:'flex',justifyContent:'space-around',
                            mx:'.5rem',
                            flexDirection:'column'}}>
                                <Typography>{item.name}</Typography>
                                <Typography sx={{fontSize:'small'}}>{item.caption}</Typography>
                            </Box>
                        </Box>
                )}
            </List>
        </Box>
        <Box>
            <Typography sx={{animation:'zoomIn .5s linear'}}>
                I you wnat to know and access the git Project  , you can request .
            </Typography>
        </Box>
        <Button variant='contained' sx={{animation:'zoomIn 2.2s linear'}}>
            <GitHubIcon sx={{mx:'.5rem'}}/>
            <Typography sx={{mr:'.5rem'}}>Visit To Git</Typography>
        </Button>
    </Box>
  )
}

export default GitPorj