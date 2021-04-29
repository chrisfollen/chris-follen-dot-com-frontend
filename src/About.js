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
                                <h4>Motorcycles. Tacos. Guitar.</h4>
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
                        <a href='mailto:chris@chrisfollen.com' className='clickable' target="_blank" rel="noreferrer">email</a>
                        <a href='https://github.com/chrisfollen' className='clickable' target="_blank" rel="noreferrer">github</a>
                        <a href='https://www.instagram.com/chris.follen/' className='clickable' target="_blank" rel="noreferrer">instagram</a>
                        <a href='https://www.linkedin.com/in/chrisfollen/' className='clickable' target="_blank" rel="noreferrer">linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
