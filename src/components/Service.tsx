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
                Web development is the art and science of creating websites and web applications using programming languages.
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
                Understanding responsive design principles and backend technologies such as Node.js is crucial for building dynamic and scalable web solutions.
                </Typography>
                <Typography>
                With built-in features like routing, authentication, and ORM, Laravel simplifies common tasks and accelerates the development process.
                </Typography>
                <Typography>
                Moreover, its API routes enable seamless integration with backend services, facilitating the development of full-stack applications with React.
                </Typography>
                <Typography>
                Next.js is a popular React framework that simplifies the creation of server-side rendered (SSR) and statically generated websites.
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