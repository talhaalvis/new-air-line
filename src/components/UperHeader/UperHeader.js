import { Box } from '@mui/material'
import React from 'react'
import logo from '../../assets/revie.jpeg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from 'antd'

const UperHeader = () => {
    return (
        <Box sx={{display:"flex",justifyContent:"center",alignItems:'center',height:'80px'}}>
            <Box  sx={{display:"flex",justifyContent:"center",alignItems:'center',}}>

            <a
                href="https://www.trustpilot.com/review/flysafariuk.co.uk"
                target="_blank"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    // fontWeight: 700,
                    // fontSize: "20px",
                    // color: '#e30425'
                }}
            >
                <img src={logo} style={{ width: "90%", height:'80px',}}></img>

            </a>
            <a
                href="https://www.trustpilot.com/review/flysafariuk.co.uk"
                target="_blank"
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    width:'40%'
                    // fontWeight: 700,
                    // fontSize: "20px",
                    // color: '#e30425'
                }}
            >
              

            <Button style={{background:'#015696',color:'#ffffff',width:"100%",height:'50px',fontWeight:400,position:'relative'}}> <AccountCircleIcon sx={{color:'#ffd701',position:'absolute',left:'6%'}}/>My Trips</Button>
            </a>
            
                

       
            </Box>

        </Box>
    )
}

export default UperHeader