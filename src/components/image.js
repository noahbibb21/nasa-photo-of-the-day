import React, {useState} from 'react';


const image = (imgSrc) => {
    console.log(imgSrc)
    return (
        <div>
         <img src={imgSrc.imgSrc} />
        </div>
    );
};



export default image;

