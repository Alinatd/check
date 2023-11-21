import React from "react";
import css from './Whyus.module.css'
import girl from '../../images/pic.png'


export function Whyus(){
    return(
        <div className={css.container}>
        <div className={css.main}>
            <h1 className={css.textm}>Why Thrive?</h1>
            <h3 className={css.textn}>Want to improve your well-being from the comfort <br /> of your own couch? Are you having trouble finding <br /> the right therapist? <span> Here at ThriveTalk, our licensed <br></br> therapists provide the same quality care you would get in office <br></br> from anywhere you can access your laptop or mobile phone. <br />Become your best self with ThriveTalk.  Start therapy now with a <br /> licensed therapist!</span></h3>
            
        </div>
        <img className={css.pic} src={girl} alt="" />
            </div>
       

       
    )
}