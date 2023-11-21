import React from "react";
import css from './Main.module.css'
import MainPic from '../../images/bg.png'
import { HelpCard } from "../HelpCard";
import {Whyus} from '../Whyus'
import { AboutUs } from "../Aboutus";
import { Health } from "../Health";

export const MainPage = () =>{
    return( <div className={css.box}>
        <div className={css.MainPage}>
            <div className={css.container}>
            <nav>
                <span className={css.talk}>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>
                <button className={css.btn}>CONTACT US</button>
            </nav>
            <div className={css.mainBlock}>
                <div>
                    <p className={css.talk}>Thrivetalk</p>
                    <h1 className="h1">HELPING YOU THRIVE <br /> IN ALL AREAS OF LIFE</h1>
                    <p style={{fontWeight:300}}>Our highly talented therapists can help you <br /><br /> with a range of issues including relationships, <br /> <br /> sex, PTSD,
                         depression, social anxiety, or even <br /> <br />just caring 
                         for yourself more.</p>
                    <div className={css.allbtn}>
                    <button className={css.who}>WHO AM I</button>
                <button className={css.who}>WHAT DO I DO</button>
                    </div>
                </div>
                <div>
        <img className={css.pic} src={MainPic} alt="" />
                </div>
            </div>
            </div>
            <div className="why">
                <Whyus/>
                <AboutUs></AboutUs>
            </div>
            <div>
                <h5 className={css.help}>WE CAN HELP YOU WITH</h5>
                <div className={css.helpcontainer}>
                    <HelpCard style ={{borderTop:'1px solid black'}} bg ="#FFE2DE" title= "Weight Lifting"/>
                    <HelpCard bg ="#C4E769" title= "Running  & Spinning"/>
                    <HelpCard bg ="#62D0DF" title= "Pumping Iron"/>
                    <HelpCard bg ="#0052C1" title= "Pumping Iron"/>
                </div>
            </div>
        </div>

      
        </div>
    )
}