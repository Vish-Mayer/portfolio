import React, {Component} from 'react'
import ProjectCardUI from './ProjectCardUI/ProjectCardUI'

//project1 media 
import img1 from '../../../Assets/testimage.png'
import img2 from '../../../Assets/background1.jpg'
import img3 from '../../../Assets/testimage.png'
import img4 from '../../../Assets/background1.jpg'

//project2 media
import img5 from '../../../Assets/testimage.png'
import img6 from '../../../Assets/background1.jpg'
import img7 from '../../../Assets/testimage.png'
import img8 from '../../../Assets/background1.jpg'

//project3 media 
import img9 from '../../../Assets/testimage.png'
import img10 from '../../../Assets/background1.jpg'
import img11 from '../../../Assets/testimage.png'
import img12 from '../../../Assets/background1.jpg'

//project4 media 
import img13 from '../../../Assets/testimage.png'
import img14 from '../../../Assets/background1.jpg'
import img15 from '../../../Assets/testimage.png'
import img16 from '../../../Assets/background1.jpg'

import './ProjectCards.css'
class ProjectCards extends Component {
 
  render(){
    return(
      <div className=" d-flex project-cards">
        <div className="row justify-content-center">
    
          <div className="col-md-5 p-0"> 
          < ProjectCardUI
              id="project1"
              imgsrc={img1} 
              imgsrc2={img2}
              imgsrc3={img3}
              imgsrc4={img4}
              cardName="This is a Dynamic Card" 
              cardDescription="This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description This is a dynamic card description"
              techStack="Ruby, React, Javascript, Others"
              projectLink="testlink.com"/>
          </div>
          
          <div className="col-md-5 p-0">
            <ProjectCardUI
              id="project2"
              imgsrc={img5} 
              imgsrc2={img6}
              imgsrc3={img7}
              imgsrc4={img8}
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
         
          <div className="col-md-5 p-0">
          < ProjectCardUI
              id="project3"
              imgsrc={img9}
              imgsrc2={img10}
              imgsrc3={img11}
              imgsrc4={img12} 
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>

          <div className="col-md-5 p-0">
            <ProjectCardUI
               id="project4"
              imgsrc={img13} 
              imgsrc2={img14}
              imgsrc3={img15}
              imgsrc4={img16}
              cardName="This is a Dynamic Card" 
              cardDescription= "This is a dynamic card description"/>
          </div>
        
        </div>
        
      </div>
    );
  }
}

export default ProjectCards