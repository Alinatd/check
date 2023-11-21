import React from "react";
import css from './Health.module.css'


export function Health({data}){
        // if(data.color){
        //     return(
        //     <div style={{background:data.color}} className={css.Card}>
        //     {data.title}
        // </div>
        //     )
        // }else{
        //     return (
        //         <div style={{backgroundImage:`url(${data.img})`}} className={css.Card}>
        //     {data.title}
        // </div>
        //     )
        // }
   
//     switch(data.color){
//         case null:
//             return (
//    <div style={{backgroundImage:`url(${data.img})`}} className={css.Card}>
//     {data.title}
//      </div>
//            )
//            default:
//             return(
//     <div style={{background:data.color}} className={css.Card}>
//            {data.title}
//             </div>
//             )
    
 
// return( 
// <>
// {
//     data.color 
//     ? 
//     <div style={{background:data.color}} className={css.Card}>
//             {data.title}
//                </div>
//     :<div style={{backgroundImage:`url(${data.img})`}} className={css.Card}>
//       {data.title}
//          </div>
// }
// </>
// )

return <>
{
    data.color && <div style={{background:data.color}} className={css.Card}>
            <h1 className={css.hello}>{data.title}</h1> 
                 </div>
}
{
    data.color === null && <div style={{backgroundImage:`url(${data.img})`}} className={css.Card}>
     <h1 className={css.hello}>{data.title}</h1>
          </div>
}
    </>

}
