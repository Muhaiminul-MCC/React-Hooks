import { Button, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React, {useState} from 'react'

export default function Togglebtn() {
    const updatebtn = () => {setToggle(!toggle);};
    const [toggle, setToggle] = useState(false);
  return (
    <div>
        <Container align="center" sx={{mt:"5rem"}}>
            <Typography variant='h1' fontSize={"3rem"} gutterBottom>Toggle Button!</Typography>
            <Button sx={{bgcolor:"ButtonFace", color:"black" , ":hover":{bgcolor:"#47e527", color:"white"}}} variant='contained' onClick={updatebtn}>{toggle? 'Turn off' : 'Turn on'}</Button>
        </Container>    
    </div>
  )
}
