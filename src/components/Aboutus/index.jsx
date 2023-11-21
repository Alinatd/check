import React from "react";
import css from './Aboutus.module.css'

export function AboutUs(){
    return(
        <div className={css.container}>
            <h1 className={css.about}>About us</h1>
            <h1 className={css.us}>We want to help you thrive! Whether you are just <br /> looking for someone to talk to, or are struggling with a <br /> mental wellness issue we’re here to help.  Our highly <br /> talented therapists can help you with a range of issues <br /> including relationships, sex, PTSD, depression, social <br /> anxiety, or even just caring for yourself more.

</h1>
        </div>
    )
}