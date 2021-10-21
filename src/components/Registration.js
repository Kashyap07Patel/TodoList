import React,{useRef, useEffect} from 'react'
import '../style/registration.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Registration() {

    const fname = useRef();
    const lname = useRef();
    const username = useRef();
    const email = useRef();
    const password = useRef();

    const submitHandler = () =>{
       
        axios.post("http://localhost:8000/user", {
            fname: fname.current.value,
            lname: lname.current.value,
            username: username.current.value,
            email: email.current.value,
            password: password.current.value
        })
        .then(res=>{console.log(res.data)})
        .catch(err=>{console.log(err)})
        
    }
    
    

    return (
        <div>
            <Container className="signup">
                    <Card sx={{ display: 'flex', height: '100%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', padding: '5% 10%'}}>
                            <form>
                                <TextField className="textfield"
                                inputRef={fname}
                                id="standard-basic" 
                                label="First Name" 
                                variant="standard" 
                                />  

                                <TextField className="textfield"
                                inputRef={lname}
                                id="standard-basic" 
                                label="Last Name" 
                                variant="standard" 
                                />

                                <TextField className="textfield"
                                inputRef={username}
                                id="standard-basic" 
                                label="Username" 
                                variant="standard" 
                                />

                                <TextField className="textfield"
                                inputRef={email}
                                id="standard-basic" 
                                label="E-mail" 
                                variant="standard" 
                                />

                                <TextField className="textfield"
                                inputRef={password}
                                id="standard-basic" 
                                label="Password" 
                                variant="standard" 
                                /> 
                                <br/><br/>
                                <Link to="/login">
                                <Button type="submit" onClick={submitHandler}>Submit</Button>
                                </Link>
                            </form>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: '50%'}}
                            image="Images/Sign up.svg"
                        />
                    </Card>
               
            </Container>
            
        </div>
    )
}
