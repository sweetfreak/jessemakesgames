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
            
            <div className="mb-5 d-flex justify-content-center">
                <div className="ratio ratio-16x9" style={{ maxWidth: '800px', width: '100%' }}>
                    <iframe 
                        src="https://www.youtube.com/embed/sUQ9y3Tg4H8" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
                <caption>Pre-alpha footage of a version of Kaigoo's Revenge used for testing</caption>
            </div>
            
            <div className="mb-5">
                <h3>Game Design Notes for Kaigoo's Revenge</h3>
                <h6 className="text-muted mb-3">Unreleased</h6>
                <p className="mb-4">
                    Kaigoo's Revenge is a title made in collaboration with CrabOnFire, in which I am the lead designer and support programmer for this Unity game. Below are my first round of game design notes upon returning after taking a short hiatus while I compeleted my batch at Recurse Center in Fall 2025.
                </p>

                <ul className="list-unstyled">

                
                    <li className="mb-2"><strong>General notes</strong> </li>
                    <li className="mb-2">• Stage Zero needs the most work - it's really hard!</li>
                    <li className="mb-2">• Stage 0 was set to a speed of 35 - possibly by mistake, as stage 1 was set to 25.</li>
                    <li className="mb-2">• I lowered the speed to 15 so I could play through the game</li>
                    <li className="mb-2">• There's no time to learn how to play, it throws you into the thick of it so quickly.</li>
                    <li className="mb-2">• Make Stage 0 easier</li>
                    <li className="mb-2">• Lessen the risk of falling into pits - move platforms closer together - the single jump + dash isn't powerful enough to cover many of the distances between platforms currently.</li>
                    <li className="mb-2">• The game reacts and expects the player to react too fast at the start</li>
                    <li className="mb-2">• When the game starts before activating other spawners, let's immediately spawn a single long, flat platform (orbs optional) that lasts 3-5 seconds - give the players a chance to breath and if it's their first time playing, jump a little bit, use the dash, etc</li>
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
                    <li className="mb-2">• Maybe the camera zoom out so you see the full screen - I think most runners don't have much camera movement at all, maybe we should think about doing it that way. Maybe it shift it slightly when the player moved up to the higher spawner - but we should always be able to see the lower platforms.</li>
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