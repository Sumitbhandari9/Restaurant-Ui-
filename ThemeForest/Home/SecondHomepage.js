import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import {BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import Homeforest from './Homeforest';
import Innerpage from './Innerpage';

 function SecondHomepage() {
  return (
    <>

        <div className='div-home-page' id='div-home-page'>
            <h1 className='Restaurant-landing'>Home Page</h1>
        </div>
        <div className='box-grid'>
            <Shyam product={Ram}/>
        </div>


    </>
  )
}

function Shyam(props){
    return(
    <>
    <props.product heading="Defoult - Left Header" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/01.jpg"/>
    <props.product heading="Video Hero - Center Header" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/02.jpg"/>
    <props.product heading="Different Design With Center Header" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/03.jpg"/>
    <props.product heading="Defoult - Center Header" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/04.jpg"/>
    <props.product heading="Coming Soon" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/coming-soon.jpg"/>
    <props.product heading="Coming Soon" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/coming-soon.jpg"/>
    </>
    )
}

function Ram(props){
    return(
    <>
        <div className='home-page-1-div-main'>
            <div className='home-page-1-div'>
                <NavLink className='Landing-page-1' to="/RestaurentPage"> <img className='frst-pro-img' src={props.imgsrc} alt="DishImage" /></NavLink>
                <div className='heading-after-pro-img'>{props.heading}</div>
            </div>
        </div>
    </>
    )
}

export default SecondHomepage;
