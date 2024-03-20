import { Box, Button, List, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ppImg from '../../public/images/avatar1.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';

import { gitPrjs } from '@/data/skills'
import { useRouter } from 'next/router';
import Link from 'next/link';
const GitPorj = () => {
    const router = useRouter()
  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',width:'80vw',m:'auto'}}>
        <Box sx={{display:'flex',justifyContent:'flex-start',flexDirection:'column',m:'2rem auto'}}>
            <Image src={ppImg} width={100} alt=''style={{borderRadius:'50%',animation:'zoomIn .5s linear'}}/>
            
            <Typography sx={{animation:'moveLeft 1s linear'}}>Khon Hein</Typography>
            <Typography sx={{animation:'moveLeft 1s linear'}}>
                “Life would be much easier if I had the source code.”
            </Typography>
            <Typography sx={{animation:'moveLeft 1s linear'}}>
            The projects listed below are private . If you want to asset and test for your necessity, you can contact and request . 
            </Typography>
        </Box>
        <Box sx={{animation:'zoomIn 1s linear',display:'flex',justifyContent:'center',
        flexDirection:'column',alignItems:'center',p:'1rem'}}>
            <Typography sx={{display:'flex',justifyContent:'center'}}>Git Projectes</Typography>
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
        <Link  style={{animation:'zoomIn 2.2s linear',border:'1px solid yellow', borderRadius:'.2rem',margin:'.5rem auto'}}
        target='_blank'
        href={`https://github.com/KhonHein`}
        >
        <Typography sx={{mr:'.5rem'}}> <GitHubIcon sx={{mx:'.5rem'}}/> Visit To Git</Typography>
        </Link>
    </Box>
  )
}

export default GitPorj