import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import Link from 'next/link'
import { Box, List, ListItem } from '@mui/material';
import { navMenus } from '@/data/nav';

const Footer = () => {
  return (
    <Box sx={{mt:'2rem',display:'flex',p:'1rem',
    flexDirection:'column',alignItems:'center',
    bgcolor:'#333A73',width:'100%',height:'40vh',mb:0,
    }}>
      <Link href="/" className='footer_logo'>Khon Hien</Link>
      <List sx={{display:'flex',justifyContent:'center',mx:'.5rem'}}>
        {navMenus&&navMenus.map((item,index)=>
        <ListItem key={index}><Link href={item.url}>{item.name}</Link></ListItem>)}
      </List>
      <Box className="footer_socials">
        <Link style={{margin:'.5rem',}} target='_blank' href="https://www.facebook.com/sai.bwathmara.9/">
            <FacebookIcon/>
        </Link>
        <Link style={{margin:'.5rem',}} href={''}><InstagramIcon/></Link>
        <Link style={{margin:'.5rem',}} href={''}><TwitterIcon/></Link>
      </Box>
      <Box >
        <small>&copy; Khon Hein . Portfolio . All right reserved ;</small>
      </Box>
    </Box>
  )
}

export default Footer
