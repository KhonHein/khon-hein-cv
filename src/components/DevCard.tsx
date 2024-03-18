import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
import img from '../../public/images/android.svg'
import Image from 'next/image'
import { DevCardType } from '@/types/devCard'


const DevCard = ({name,img,caption}:DevCardType) => {
  return (
    <Card sx={{ maxWidth: 345 ,m:'.5rem'}}>
    <CardActionArea>
      <Image src={img} alt='android'/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {caption}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default DevCard