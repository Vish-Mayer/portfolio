import React, {Component} from 'react'
import ProjectCardUI from './ProjectCardUI/ProjectCardUI'

//project1 media 
import img1 from '../../../Assets/Projects/1-1.png'
import img2 from '../../../Assets/Projects/1-2.png'
import img3 from '../../../Assets/Projects/1-3.png'

//project2 media
import img4 from '../../../Assets/Projects/2-1.png'
import img5 from '../../../Assets/Projects/2-2.png'
import img6 from '../../../Assets/Projects/2-3.png'

//project3 media 
import img7 from '../../../Assets/Projects/3-1.png'
import img8 from '../../../Assets/Projects/3-2.png'
import img9 from '../../../Assets/Projects/3-3.png'

//project4 media 
import img10 from '../../../Assets/Projects/4-1.png'
import img11 from '../../../Assets/Projects/4-2.png'
import img12 from '../../../Assets/Projects/4-3.png'

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
              cardName="Music Visualiser" 
              cardDescription="A single page web app music visualiser that dynamically creates animation based on data returned by the Spotify WEB API."
              techStack="React.js, Node.js, Cypress"
              projectLink="https://github.com/Walker-TW/Front-End-Vishual"/>
          </div>
          
          <div className="col-md-5 p-0">
            <ProjectCardUI
              id="project2"
              imgsrc={img4} 
              imgsrc2={img5}
              imgsrc3={img6}
              cardName="Acebook" 
              cardDescription= "A social media application that allows you to add friends, share your thoughts, browze through other users profiles, and comment on other peoples posts."
              techStack="Ruby on Rails, PostgreSQL, Rspec"
              projectLink="https://github.com/basselalsayed/acebook-derailed"/>
          </div>
         
          <div className="col-md-5 p-0">
          < ProjectCardUI
              id="project3"
              imgsrc={img7}
              imgsrc2={img8}
              imgsrc3={img9}
              cardName="React Chat Application" 
              cardDescription= "React application that implements socket.io to allow a user to create a room and talk to friends."
              techStack="React.js, Node.js"
              projectLink="https://github.com/Vish-Mayer/Chat"/>
          </div>

          <div className="col-md-5 p-0">
            <ProjectCardUI
               id="project4"
              imgsrc={img10} 
              imgsrc2={img11}
              imgsrc3={img12}
              cardName="Makersbnb"
              cardDescription= "An online marketplace that connects people who want to rent out their homes with people who are looking for accommodations."
              techStack="Ruby, Sinatra, JavaScript, jQuery, PostgreSQL, Rspec, Capybara"
              projectLink="https://github.com/asiaellis5/Makers-Bnb"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCards