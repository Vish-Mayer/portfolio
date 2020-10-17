import React, { useState } from 'react';
import './Carousel.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon from '../../../../../Assets/whitearrowXS.png'
 
export default function Carousel({img1, img2, img3, img4}) {

  let sliderArray = [img1, img2, img3, img4]

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
              <img className="carousel-img" src={item}></img>
            </div>
          )
        })
      }
      <button id="goLeft" onClick={goLeft}>
      <img src={icon}/>
      </button>
      <button id="goRight" onClick={goRight}>
      <img id="right-icon" src={icon}/>
      </button>
    </div>
  );
}
