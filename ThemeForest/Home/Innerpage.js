import React from 'react'

 function Innerpage() {
  return (
    <>
        <div className='div-inner-page'>
            <h1 className='Restaurant-landing'>Inner Page</h1>
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
    <props.product heading="About Us" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p1.jpg"/>
    <props.product heading="Menu List 1" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p2.jpg"/>
    <props.product heading="Menu List 2" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p3.jpg"/>
    <props.product heading="Menu List 3" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p4.jpg"/>
    <props.product heading="Menu List 4" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p5.jpg"/>
    <props.product heading="Our Chef" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p6.jpg"/>
    <props.product heading="Contact Us" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p7.jpg"/>
    <props.product heading="Reservation Opentable" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p8.jpg"/>
    <props.product heading="Reservation Contact Form" imgsrc="https://kalanidhithemes.com/live-preview/landing-page/delici/img/p9.jpg"/>
    </>
    )
}

function Ram(props){
    return(
    <>
        <div className='home-page-1-div-main'>
            <div className='home-page-1-div'>
                <img className='frst-pro-img' src={props.imgsrc} alt="DishImage" />
                <div className='heading-after-pro-img'>{props.heading}</div>
            </div>
        </div>
    </>
    )
}

export default Innerpage;
