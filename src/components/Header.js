import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useHistory, Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import "./Header.css";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history=useHistory();
  const[username,setUsername]=useState("");
  useEffect(()=>{
    if(localStorage.getItem('username')!=null){
      setUsername(localStorage.getItem('username'));
    }
    },[]);



    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        {hasHiddenAuthButtons ?
        <Link to="/">
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>history.push("/")}
        >
          Back to explore
        </Button>
        </Link>
        :
        username!=="" ?
        
        <Box sx={{display:"flex",alignItems:"center"}}>
          <img src="avatar.png" alt={username}/> 
          {username}
          <Button
          className="explore-button"
          variant="text"
          onClick={()=>{
            localStorage.clear();
            window.location.reload();
          }
        }
        >
          LOGOUT
        </Button>
        </Box>
        
        : <Box sx={{display:"flex",alignItems:"center"}}><Button
          className="explore-button"
          variant="text"
          onClick={()=>history.push("/login")}
        >
          LOGIN
        </Button>
        <Button
          className="explore-button"
          sx={{color:"white"}}
          variant="contained"
          onClick={()=>history.push("/register")}
        >
          REGISTER
        </Button>
        </Box>
        
        }
      </Box>
      
        
      
    );
};

export default Header;
