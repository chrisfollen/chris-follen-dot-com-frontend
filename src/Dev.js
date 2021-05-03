import React from 'react'

export default function Dev() {
    return (
        <div className = 'dev'>
            <div className = 'dev-container'>
                <div className= 'dev-heading-container'>
                    <h3 className = 'dev-heading'>A selection of my work.</h3>
                </div>
                <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
                <div className = 'dev-project'>
                    <div className = 'dev-project-info'>
                        <h4 className = 'dev-project-title'>Dat Place</h4>
                        <p className = 'dev-project-description'>Info here</p>
                        <div className = 'dev-project-links'>
                            <a href="https://github.com/chrisfollen/Dat-Place-App" target="_blank" rel="noreferrer" >GitHub</a>
                            <a href="https://youtu.be/Bqc3w53eidw" target="_blank" rel="noreferrer" >YouTube</a>
                        </div>
                    </div>
                    <div className = 'dev-project-card'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/dat_place_card.jpg?alt=media&token=8e026741-a481-4b8b-b54c-2b956fb3defa' alt='project card'></img>
                    </div>
                </div>
                <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
                <div className = 'dev-project'>
                    <div className = 'dev-project-card'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/jeopardish_card.jpg?alt=media&token=febecfd3-36ed-409d-bd8f-d1e2f77a3c63' alt='project card'></img>
                    </div>
                    <div className = 'dev-project-info'>
                        <h4 className = 'dev-project-title'>Jeopard(ish)!</h4>
                        <p className = 'dev-project-description'>My first full-stack app is a web-based trivia that makes use 
                        of an external API to bring in past Jeopardy questions and allow the user to choose a card and 
                        attempt to answer the question.  If correct, the value of the question is added to the user’s 
                        earnings.  Built with a Rails backend and Javascript frontend.</p>
                        <div className = 'dev-project-links'>
                            <a href="https://github.com/chrisfollen/Jeopardish" target="_blank" rel="noreferrer" >GitHub</a>
                            <a href="https://www.youtube.com/watch?v=tD3j_g64p84" target="_blank" rel="noreferrer" >YouTube</a>
                        </div>
                    </div>
                </div>
                <br />​<hr />​​​​​​​​​​​​​​​​​​​<br />
                <div className = 'dev-project'>
                    <div className = 'dev-project-info'>
                        <h4 className = 'dev-project-title'>Computender</h4>
                        <p className = 'dev-project-description'>My first dev project - I built ‘Computender’, a simple CLI 
                        app that allows a user to search for drinks by various methods, and create, save, and manipulate 
                        favorites list.  Built in Ruby.</p>
                        <div className = 'dev-project-links'>
                            <a className = 'clickable' href="https://github.com/chrisfollen/virtual_bartender" target="_blank" rel="noreferrer" >GitHub</a>
                            <a className = 'clickable' href="https://www.youtube.com/watch?v=pfqM5xxp5A0" target="_blank" rel="noreferrer" >YouTube</a>
                        </div>
                    </div>
                    <div className = 'dev-project-card'>
                        <img src='https://firebasestorage.googleapis.com/v0/b/chris-follen-website.appspot.com/o/computender_card.jpg?alt=media&token=21f7f54b-ee32-4158-a7c5-82cea364944d' alt='project card'></img>
                    </div>

                </div>



            </div>
        </div>
    )
}
