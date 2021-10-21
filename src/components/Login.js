import React,{useRef,useState,Component} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { Button } from '@mui/material';
import {Redirect} from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             auth:false,
             users:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8000/user")
        .then(res=>{
            this.setState({users:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    changeHandler=(e)=>{
        const {name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        this.state.users.map(user=>{
            if (user.username==this.state.username){
                if(user.password==this.state.password){
                    
                    localStorage.setItem('Email', this.state.username);
                    this.setState({auth:true})
                }
                else{
                    alert("Password Does not match")
                }
            }
            
        })

    }
    
    render() {
        return (
            <div>
                <Container className="signup">
                    <Card sx={{ display: 'flex', height: '100%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', padding: '5% 10%'}}>
                            <form>
                                <TextField className="textfield"
                                name="username"
                                value={this.state.username}
                                onChange={this.changeHandler}
                                id="standard-basic" 
                                label="Username" 
                                variant="standard" 
                                />

                                <TextField className="textfield"
                                name="password"
                                value={this.state.password}
                                onChange={this.changeHandler}
                                id="standard-basic" 
                                label="Password" 
                                variant="standard" 
                                /> 
                                <br/><br/>
                                <Button type="submit" onClick={this.submitHandler}>Submit</Button>
                            </form>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: '50%'}}
                            image="Images/Sign up.svg"
                        />
                    </Card>
            </Container> 
            {this.state.auth && <Redirect to="/homepage"/>}    
        </div>
        )
    }
}
