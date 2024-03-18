import { Box, Button, Typography } from '@mui/material'
import React from 'react'

interface Props {
  name:string,
  Icon :any,
  title:string,
  caption:string,
}
const CardItem = ({name,Icon,title,caption}:Props) => {
  return (
    <Box sx={{width:150,height:250,border:'1px solid white',
    borderTopRightRadius:'2rem',m:'.5rem',p:'.5rem',
    borderBottomLeftRadius:'2rem',display:'flex',flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',bgcolor:'#141439',
    ':hover':{bgcolor:'transparent',color:'yellow'}
    }}>
        <Icon/>
        <Typography sx={{color:'white'}}>{title}</Typography>
        <Typography sx={{color:'white'}}>{caption}</Typography>
        <Button variant='outlined' color='secondary' sx={{color:'success.main'}}>{name}</Button>
    </Box>
  )
}

export default CardItem