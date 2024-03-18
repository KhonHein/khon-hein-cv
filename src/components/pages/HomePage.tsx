import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../Header'
import Contact from '../Conatct'

import Image from 'next/image'
import { devsIn } from '@/data/skills'
import DevCard from '../DevCard'

const HomePage = () => {
  const [open,setOpen]=useState(false);
  return (
    <Box sx={{minHeight:'80vh',my:'1rem'}}>
        <Header/>
        {!open&&<Box sx={{mt:'4rem',display:'flex',justifyContent:'center',animation:'zoomIn 1s linear'}}>
          <Button variant='contained' 
          onClick={()=>setOpen(true)}
          >Click && Contact</Button>
        </Box>}

        <Box sx={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
          {devsIn&&devsIn.map((item)=>
          <DevCard key={item.id}
          id={item.id}
          name={item.name}
          img={item.image}
          caption={item.caption}
          />
          )}
        </Box>
        <Dialog fullWidth open={open} onClose={()=>setOpen(false)} >
          <DialogContent sx={{display:'flex',justifyContent:'center',alignItems:'center',}}>
          <Contact/>
          </DialogContent>
          <DialogActions>
            <Button variant='outlined' onClick={()=>setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
    </Box>
  )
}

export default HomePage