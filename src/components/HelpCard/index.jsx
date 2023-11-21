import React from "react";
import css from './HelpCard.module.css'

export function HelpCard({title,bg}){
    return(
        
        <div className={css.HelpCard} style={{backgroundColor:bg,borderTop:'1px solid'}} >
            <div className={css.line}></div>
            <div className={css.CardContent}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}