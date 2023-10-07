import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg';
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const Navbar = () => {

   const [openMenu,setOpenMenu] =useState(false)
   const menuOptions =[
    {
         text : "Home",
         icon :<HomeIcon/>
   },
   {
         text : "About",
         icon :<InfoIcon/>
   },
   {
         text : "Testiomonals",
         icon :<CommentRoundedIcon/>
   },
   {
         text : "Contact",
         icon :<PhoneRoundedIcon/>
   },
    {
         text : "Cart",
         icon :<ShoppingCartRoundedIcon/>
   },

]

  return (
    <nav>
        <div className="nav-logo-container">
            <img src ={Logo} alt ="" />
        </div>
        <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Login</a>
        <a href="">
            <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button"> Bookings Now </button>
               <HiOutlineBars3  onClick = { ()  => setOpenMenu(true) }/>
        </div>
        <Drawer open ={openMenu} onClose ={()=> setOpenMenu(false)}
          anchor ="right"> 
          <Box
             sx={{ width : 250 }}
             roles ="presentation"
             onClick ={() => setOpenMenu(false)}
             onKeyDown ={()  => setOpenMenu(false)}
            >
              
                {menuOptions.map((item) => (
                    <ListItem key ={item.text} disablePadding>
                       <ListItemButton>
                           <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                       </ListItemButton>
                    </ListItem>
                 ) )}
              
          </Box>
        </Drawer>
    </nav>
  )
}

export default Navbar