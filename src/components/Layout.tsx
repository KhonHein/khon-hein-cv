import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import Nav from './Nav'
import Footer from './Footer'
import Image from 'next/image'
interface Props {
  children:ReactNode
}
const Layout = ({children}:Props) => {

  return (
    <Box>

      <Image
        src="/header.svg"
        alt="header-image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto",position:'fixed',top:0,zIndex:'-1' ,animation:'zoomOut .5s linear'}}
      />

      {children}

      <Nav/>
      <Footer/>
    </Box>
  )
}

export default Layout