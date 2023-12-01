import React from 'react'
import {NavLink} from 'react-router-dom'

export default function RestaurentPage() {
  return (
    <>
            <div className='man-div-of-restaurant-page'>
            <div className='logo-navbar-buttons'>
            <div class="image-layer" ></div>
                <NavLink className='Landing-page-1' to="/"><img  src="https://kalanidhithemes.com/live-preview/landing-page/delici/images/logo.png" alt="" /></NavLink>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>Menus</li>
                        <li>About Us</li>
                        <li>Our Chefs</li>
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                <button className='view-demo-buy-now-btns'>Find A Table</button>
                <i class="fa-solid fa-bars"></i>

                </div>
            </div>
            </div>
    </>
  )
}
