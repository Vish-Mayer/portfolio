import React, { useState } from 'react';
import './Carousel.scss'
 
export default function Carousel() {

  let sliderArray = [1,2,3,4]

  const [x, setX] = useState(0)

  const goLeft = () => {
    setX( x + 100)
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX( x + 100)
  }

  const goRight = () => {
    (x === -100 * (sliderArray.length - 1)) ? setX(0) : setX( x - 100)
  }
    
  return (
    <div className ="carousel">
      {
        sliderArray.map((item, index) => {
          return(
            <div key={index} className="slider" style={{transform:`translateX(${x}%)`}}>
              {item}
            </div>
          )
        })
      }
      <button id="goLeft" onClick={goLeft}>Left</button>
      <button id="goRight" onClick={goRight}>Right</button>
    </div>
  );
}
