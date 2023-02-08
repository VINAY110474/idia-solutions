
import './App.css';
import React, { useState } from "react";
import DiamondIcon from '@mui/icons-material/Diamond';
import {items} from './blocks'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function Template() {
console.log(items)
  return (
    <div className='login-screen-wrapper1'>
      <Sidebar/>
      <div className='wrapper-items-block'>
      <div className='title-wrapper'>
        <DiamondIcon sx={{height:"40px",
        width:"40px"}}/>
        <span className='primary-header'>SINGLE STONE SOLUTIONS</span>
      </div>
      <div className='block-container'>
      <div className='metrics-header'>
            Risk Management Dashboard
          </div>
          <div className='devider'></div>
        <div className='items-wraper-blocks'>
          
        {items && items?.map((item,index)=>{
          {console.log(item)}
          return ( 
          <Card key={index} style={{ mixWidth: 175,backgroundColor:item?.color}} className="card-item">
            <CardContent>
              <Typography sx={{ fontSize: 14,whiteSpace:"nowrap" }} color="text.secondary" gutterBottom>
                {item?.title}
              </Typography>
              <Typography variant="h5" component="div">
              {item?.sign}{item?.value}
              </Typography>
      </CardContent>
    </Card>
          )
        })}
        </div>
      </div>
  </div>
  </div>
  );
  }