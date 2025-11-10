import React from 'react';
// import designProcessImage from '../assets/images/.png';

export default function DesignProcess() {
    return (
        <div className="container mt-5">
            <hr />
            <h4 className="fst-italic text-center mb-4">
                🚧 This section is in progress. Please bear with me while I update it :) 🚧 
            </h4>
            <hr />
            
            <h1 className="mt-4 mb-3">Design Process</h1>
            <h5 className="mb-4">
                Below, you'll find breakdowns of my design process for various projects I've created both professionally and personally.
            </h5>
            
            <hr />
            
            <div className="mb-5 d-flex flex-column align-items-center">
                <div className="ratio ratio-16x9" style={{ maxWidth: '800px', width: '100%' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/sUQ9y3Tg4H8" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="text-muted mt-2 small text-center" style={{ maxWidth: '800px' }}>
                    Pre-alpha footage showing Stage 0 and Stage 1 evolutions of Kaigoo's Revenge
                </p>
            </div>
            
            <div className="mb-5">
                <h3>Game Design Notes for Kaigoo's Revenge</h3>
                <h6 className="text-muted mb-3">Unreleased</h6>
                <p className="mb-4">
                    Kaigoo's Revenge is a title made in collaboration with CrabOnFire, in which I am the lead designer and support programmer for this Unity game. Below are a small selection of my first round of game design notes upon returning after taking a hiatus while I compeleted my batch at Recurse Center in Fall 2025.
                </p>

                <ul className="list-unstyled">

                
                    <li className="mb-2"><strong>Stage 0 Notes</strong> </li>

                    <li className="mb-2">Stage 0 needs the most work - it's really hard!</li>
                    <li className="mb-2">• It was set to a speed of 35 - possibly by mistake, as Stage 1 was set to 25. I lowered the speed to 15 so I could play through the gam - I think that's what we should stick with</li>
                    
                    <li className="mb-2">• Lessen the risk of falling into pits - move platforms closer together - the single jump + dash is barely powerful enough to cover many of the distances between platforms currently.</li>

                    <li className="mb-2">• Let's delay the additional platforms a little longer, so the player has more time to get ready and if it's their first time playing, jump a little bit, use the dash, etc. Feels like you're thrown into the thick of it too quickly</li>
                    <li className="mb-2">• Delay the enemy spawner so it doesn't start right away.</li>
                    <li className="mb-2">• In this first stage, we should focus on platforms that allow the player to run automatically so it's harder for them to get pushed off stage - it's a little tricky right now. It's even a little confusing, as originally, I thought you'd be able to run past the computers - I didn't know you had to jump up above them.</li>


                    <li className="mb-2"><strong>Stage 1</strong></li>
                    <li className="mb-2">• Stage 1's attack cooldown should be shorter, so you can do them pretty quickly right after each other, like only last as long as the animation, so you can dash and attack back to back.</li>
                    <li className="mb-2">• As we play through this, we'll have to determine the best length of time for the player to play before evolutions take place. Seems to difficult to determine at this point.</li> 

                    <li className="mb-2"><strong>Death/Respawn:</strong> </li> 

                    <li className="mb-2">• Death/Respawn is so quick and the one sfx flash is more distracting than helpful.</li>
                    <li className="mb-2">• We should rework the death animation</li>
                    <li className="mb-2">• Give the player a moment to realize what they did wrong - think of how in a Mario game, when you die from an enemy, Mario looks at the screen for a second, and then he bounces up before falling all the way down. Maybe we do something like that?</li>
                    <li className="mb-2">• In this Sakurai video, he talks about "freezing" for big moments - which could be good for when you die?</li>
                    <li className="mb-2">• Remove the sfx flash OR make it smaller, and just happen around the player</li>
                    <li className="mb-2">• Auto respawn the player, but make them impervious/intangible before the player taps anything - I kept hitting a button respawn to quick and then respawned into an enemy or a pit</li>
                    <li className="mb-2">• Camera should lower back to ground if the player was high up</li>
                    <li className="mb-2">• We should raise the player in from the bottom on a natural in-game platform, rather than making a platform appear that suddenly disappears. The platform should lower after 10 seconds, or 3 seconds, after the player has jumped off it (whichever comes first)</li>
                    <li className="mb-2">• Think of the platforms that bring a player into the screen in Smash Bros - they disappear once you jump off, and if you don't jump off, they disappear after x amount of seconds.</li>

                    <li className="mb-2"><strong>Evolution/scene change:</strong> </li> 

                    <li className="mb-2">• Evolution/scene change is instantaneous</li>
                    <li className="mb-2">• We should make the evolution more of a moment - would be fun to see a pokemon-like evolution where the slime evolves into the next form while the rest of the game freezes around the player</li>
                    <li className="mb-2">• During/immediately after evolution, the player should be invincible for a few moments</li>

                    <li className="mb-2"><strong>Transition to new background/platforms:</strong></li>

                    <li className="mb-2">• Backgrounds should fade/slide in so it's not like a light switch</li>
                    <li className="mb-2">• Platforms from previous stage should either disappear, or the character should not be pushed off screen by them (this is mostly an issue for Stage 1 to 2 evolution, since the final Kaigoo form cannot jump and the stage 1 platforms can't seem to be sliced)</li>

                    <li className="mb-2"><strong>Question/suggestion:</strong> </li>

                    <li className="mb-2">• I think the camera zoom out so you see the full screen - most runners don't have much camera movement at all, maybe we should think about doing it that way. If we could always see the lower platform, the game would be far less cruel and challenging, I think.</li>
                </ul>
            </div>
            
            <hr />

            {/* <img src={designProcessImage} alt="Design Process" className="design-process-image" /> */}
            
            <div className="mb-5">
                <h3>Playtesting Business Frog and MineFind</h3>
                <p className="text-muted">Content coming soon...</p>
            </div>

            <hr />
            
            {/* <img src={designProcessImage} alt="Design Process" className="design-process-image" /> */}
            
            <div className="mb-5">
                <h3>Concepting Games for Noggin</h3>
                <p className="text-muted">Content coming soon...</p>
            </div>
        </div>
    );
}