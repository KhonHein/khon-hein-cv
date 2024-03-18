import Link from 'next/link'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const HeaderSocial = () => {
  return (
    <Box className='header_socials' sx={{
        display:'flex',flexDirection:'column',
        animation:'moveRight 1s linear'
        }}>
        <KeyboardArrowDownIcon sx={{transform:'rotate(-180deg)'}}/>
        <RemoveIcon sx={{transform:'rotate(90deg)',}}/>
        <RemoveIcon sx={{transform:'rotate(90deg)',}}/>

        <Link href="https://github.com/KhonHein" target='_blank'> 
        <LinkedInIcon/> 
        </Link>
        <Link href="https://github.com/KhonHein" target='_blank'>
        <GitHubIcon/>
        </Link>
        <Link href="https://github.com/KhonHein" target='_blank'>
        <FacebookIcon/>
        </Link>
        
        <RemoveIcon sx={{transform:'rotate(90deg)',}}/>
        <RemoveIcon sx={{transform:'rotate(90deg)',}}/>
        <KeyboardArrowDownIcon sx={{}}/>
    </Box>
  )
}

export default HeaderSocial