import React from 'react'

export default function About() {
    return (
        <div className = 'about'>
            <div className='about-outer-container'>
                <div className='about-container'>
                    <div className='about-hero-info'>
                        <h3>Hi There, I'm Chris!</h3>
                        <h3>Developer & Photographer</h3>
                    </div>
                    <div className='about-photo-and-info-container'>
                        <div className='about-image-container'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/headshot-1.jpg?alt=media&token=9699d3b3-ac4b-45bb-a915-17c898851efa' alt='chris headshot' />
                        </div>
                        <div className='about-info' >
                            <div>
                                <h4>Bikes. Tacos. Guitar.</h4>
                                <h4>Stoicism. Skiing. Rioja.</h4>
                            </div>
                            <div>
                                <p>I’m so glad you found your way to my website, and I hope my work puts a smile on your face.</p>
                                <p className='p2'>I'm a front-end web developer and freelance photographer based in Boulder, Colorado. 
                                I like thinking, creating, problem solving, and learning. I’m passionate 
                                about everything I do, and am particularly intrigued by work that marries an aesthetic component 
                                with a technical one.</p>
                            </div>
                        </div>
                    </div>
                    <div className='about-quote-container'>
                        <div className='about-quote'>
                            <h5>"Simplicity is the ultimate sophistication."</h5>
                        </div>
                        <div className='about-quote-author'>
                            <h5>-Leonardo da Vinci</h5>
                        </div>
                    </div>

                </div>
                <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
                <div className='resume-container'>
                    <div className='resume-header'>
                        <h3>Resume</h3>
                    </div>
                    <div className='resume-image-container'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/resume.png?alt=media&token=b8ca6670-f67a-46ab-807e-f09c7b6448e5' alt='chris resume' />
                    </div>

                </div>
                <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
                <div className='contact-container'>
                    <div className='contact-header'>
                        <h3>Contact</h3>
                    </div>
                    <div className='contact-text'>
                        <h4>Let's build something rad together!</h4>
                        <h4>Drop me a <a href="mailto:chris@chrisfollen.com" className='clickable red-text'>line</a></h4>
                    </div>
                    <div className='contact-links'>
                        <a href='mailto:chris@chrisfollen.com' className='clickable' target="_blank" rel="noreferrer"><img className= 'about-social-link clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/email_white.png?alt=media&token=7a61f44d-5e6d-4612-b364-c53cc1b7a85c" alt='Email icon'/></a>
                        <a href='https://github.com/chrisfollen' className='clickable' target="_blank" rel="noreferrer"><img className= 'about-social-link clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/github_white.png?alt=media&token=cf87185c-e1c3-4672-899e-edd36f7389b7" alt='Github logo'/></a>
                        <a href='https://www.linkedin.com/in/chrisfollen/' className='clickable' target="_blank" rel="noreferrer"><img className= 'about-social-link clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/linkedin_white.png?alt=media&token=53311b97-4df1-4dbb-8255-7907ce849851" alt='LinkedIn Logo'/></a>
                        <a href='https://www.instagram.com/chris.follen/' className='clickable' target="_blank" rel="noreferrer"><img className= 'about-social-link clickable' src="https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/instagram_white.png?alt=media&token=a607e47c-7ce0-4b8c-8766-1fe1d930d6ff" alt='Instagram Logo'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
