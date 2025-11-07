import React from "react";
import jessemario from '../assets/images/jessemario.png';

function Home() {
  return (
    <div className="about-container mt-5">
      <div className="about-content">
        <img src={jessemario} alt="Jesse, looking quite tired at Super Nintendo World... yikes" className="about-image" />
        {/* <figcaption>I was running on 3 hours of sleep in this picture, but it was worth it</figcaption> */}
        <div className="about-text text-center">
          <h1>Jesse Sheehan Makes Games</h1>
          <h4><i>and he's excited to tell you about them!</i></h4>
          <br></br>
          <p>
            {/* You may have heard these RUMORS about me: saying I was born with a controller in my hand, that I couldn't make it in Hollywood so I pivoted to gaming, or that I am really bad at Elden Ring... They're NOT TRUE (but, I am terrible at Elden Ring). <br></br><br></br>           */}
        After 30 years of playing games, I'm excited to be making them!
        <br/> 
        Over the past few years, I've pivoted my career from TV production to gaming, by learning how to design and code games using Unity and Godot. In the process, I've read countless books on game theory <i>(roughly 6)</i>, worked on a handful of solo projects and game jams, and did much of it while working full-time as a producer/designer forNickelodeon's Noggin app. Stay tuned to see where I end up next!
          <br></br>
          <br></br>
          <p>TL;DR</p>
          <p>I have</p>
           <br></br>
           <br></br>
           {/* <strong>NOTE:</strong> This website is still under construction, but I'll be adding more content soon! */}
          {/*Now that I've got a few years of producing and designing under my belt, I'm looking to for my next adventure as a narrative and game designer. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;