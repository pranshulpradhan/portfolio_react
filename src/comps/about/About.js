import React, { useState } from 'react';
import Primaryfocus from './Primaryfocus';
import Creativity from './Creativity';
import Activities from './Activities';
import Skills from './Skills';

const About = () => {

    //todo ----- declair state varriable -----
    const[divSize, setDivSize] = useState(false);

    let paraArr = [
        "Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.",
        "Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.",
        "In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.",
        "If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life."
    ];
    //todo ----- set para size -----
    function toggleHandeler(){
        setDivSize(!divSize);
    }

  return (
    <main>
        <div className="para_container" >
            <div className="para" style={{
                overflow:"hidden",
                whiteSpace: "nowrap",
                textWrap: "wrap",
                height:  divSize ? "auto" : "50px",
                }}>
                {
                    paraArr.map((ele) =>{
                        return(<p key = {Date.now()}>{ele}</p>);
                    })
                }
            </div>            
            <button onClick={toggleHandeler}>Show More</button>
            <Primaryfocus/>
            <Creativity/>
            <Skills/>
            <Activities/>
        </div>
    </main>
  )
}

export default About;