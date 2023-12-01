import React from 'react'
import Homeforest from './Home/Homeforest'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SecondHomepage from './Home/SecondHomepage'
import Innerpage from './Home/Innerpage'
import FooterForest from './Home/FooterForest'
import RestaurentPage from './Home/RestaurentPage'

export default function MainRouterThemeForest() {
  return (
    <>
    <BrowserRouter>
    <Homeforest/>
             <Routes>
            <Route>
                 <Route path='/' element={<SecondHomepage/>}/>
                <Route path='/Innerpage' element={<Innerpage/>}/>
                <Route path='/RestaurentPage' element={<RestaurentPage/>}/>
            </Route>
        </Routes>
    <FooterForest/>
    </BrowserRouter>
    </>
  )
}
