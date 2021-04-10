import React from "react";

const Img = props =>{
    return (
        <>
    <img src={props.image} alt="image"></img>
    <button onClick={props.functionShoot}>ok</button>  
        </>
    )
};
export default Img;