import React from 'react'
import '../Home/Homeforest.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import SecondHomepage from './SecondHomepage'

export default function Homeforest() {
  return (
    <>
        <div className='Main-div-of-page'>
            <div className='logo-2-buttons'>
                <NavLink className='Landing-page-1' to="/"><img  src="https://kalanidhithemes.com/live-preview/landing-page/delici/images/logo.png" alt="" /></NavLink>
                <div>
        <NavLink className='Landing-page-1' to="/Innerpage">
                <span className='Landing-page'>Landing Page</span></NavLink>&nbsp;&nbsp;
                <span className='Buy-now'>Buy Now</span>
                </div>
            </div>
            <div className='div-no-2'>
                <h1 className='Restaurant-landing'>Restaurant Landing Page</h1>
                <h4 className='4+-pre-define'>4+ Pre-define creative and unique Restaurant Landing Pages</h4>
                <span>
                <button className='view-demo-buy-now-btns'>View Demo</button>
                <button className='view-demo-buy-now-btns'>Buy Now</button>
                </span>
            </div>
            <div className='view-btn-after-img'>
            <img className='img-of-dishes' src="https://kalanidhithemes.com/live-preview/landing-page/delici/images/screens.png" alt="" />
            </div>
            



        </div>
        
    </>
  )
}
