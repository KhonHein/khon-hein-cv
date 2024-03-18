import React from 'react'

import CTA from './CTA'
import ME from '../../public/images/me.jpg'

import HeaderSocial from './HeaderSocial'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'

const Header = () => {
  const quote =`At first, you didn't success, call it, version 1.0.0;`
  return (
    <header>
      <Box className="container header_container">
        <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',
        alignItems:'center',
        animation:'moveDown 1s linear'
        }}>
          <Typography>Hello, Im</Typography>
          <Typography variant='h5' sx={{color:'yellow'}}>Khon Hein</Typography>
          <Typography className='text-warning '>Junior, Web-Developer </Typography>
        <CTA />
        </Box>
        
        <Box className="me" 
        sx={{display:'flex',
        justifyContent:'space-around',alignItems:'center'}}>
          <HeaderSocial/>
          <Box 
          sx={{
            borderRadius:' 12rem 12rem 0 0',
            background: 'linear-gradient(#a0b3b9, transparent)',
            width: '22rem',
            height: '30rem',
            display:'flex',justifyContent:'center',overflow:'hidden',
            animation:'moveUp .3s linear'
            }}>
            <Image width={400} src={ME} alt="me" 
            style={{animation:'zoomIn .5s linear',borderRadius:'inherit'}} />
          </Box>
          <Link href="#contact" className='scroll_down'
          style={{animation:'moveLeft 1s linear'}}
          >
            <Typography sx={{display:'flex',writingMode:'vertical-rl'}}>- - - - - - Khon Hein - - - - - - - </Typography>
          </Link>
        </Box>
        <Typography sx={{display:'flex',justifyContent:'center',

        animation:'zoomIn .5s linear'}}>{quote}</Typography>
      </Box>
    </header>
  ) 
}

export default Header