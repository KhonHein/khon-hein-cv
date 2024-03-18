
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

import { Box, Button, TextField, Typography } from '@mui/material';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { config } from '@/utils/config';

const Contact = () => {
  const [isSuccess,setSuccess] = useState(false);
  const [data,setEmail] = useState({user_name:'',user_email:'',message:''});
  
  const form = useRef();

  const sendEmail = (e:any) => {
    e.preventDefault();
    //@ts-ignore
    emailjs.sendForm(config.servicId, config.templateId,form.current , config.publicKey)
      .then((result) => {
          if(result.status) {
            setEmail({user_name:'',user_email:'',message:''});
            setSuccess(true);
          };
      }, (error) => {
          setSuccess(false)
      });
  };
  return (
    // @ts-ignore
    <form ref={form} onSubmit={sendEmail}
    style={{display:'flex',justifyContent:'center',width:'100%',
    alignItems:'center',margin:'2rem auto',flexDirection:'column',
    animation:'moveUp 1s linear'
    }}>
        <Typography>Sent Email && Hire Me</Typography>
        <hr style={{backgroundColor:'red',width:200,margin:'.5rem auto'}}/>

        {isSuccess&&<Typography sx={{color:'yellow',width:'100%',display:'flex',justifyContent:'center'}}>Successfully Send </Typography>}

        <Box sx={{display:'flex',justifyContent:'center'}}>
          
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',
            flexDirection:'column',width:100,}}>

                <Button variant='contained' sx={{width:80,m:'.1rem'}}><MarkEmailReadIcon sx={{m:'.1rem'}}/></Button>
                <Button variant='contained' sx={{width:80,m:'.1rem'}}><FacebookIcon sx={{m:'.1rem'}}/></Button>
                <Button variant='contained' sx={{width:80,m:'.1rem'}}><TelegramIcon sx={{m:'.1rem'}}/></Button>

            </Box>
            <Box 
            sx={{display:'flex',justifyContent:'center',flexDirection:'column',
            alignItems:'center'}}>
                <TextField required 
                type="text" name="user_name"
                sx={{m:'.5rem',minWidth:200}} variant='outlined' label='name'
                onChange={(event)=>setEmail({...data,user_name:event.target.value})}
                />
                <TextField required 
                type="email" name="user_email"
                sx={{m:'.5rem',minWidth:200}} variant='outlined' label='email'
                onChange={(event)=>setEmail({...data,user_email:event.target.value})}
                />
            </Box>
        </Box>
        <TextField sx={{width:300}}
                name="message"
                onChange={(event)=>setEmail({...data,message:event.target.value})} 
                multiline
                minRows={5}
                required
                variant='outlined' label='contact'/>
      <Button 
      type="submit"
      variant='contained' sx={{width:150,m:'.5rem'}}
      disabled={!(data.user_name&&data.user_email&&data.message)}
      onClick={sendEmail}
      >Send</Button>
    </form>
  )
}

export default Contact 