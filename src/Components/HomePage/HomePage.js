import React from 'react'
import Button from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { Container } from '@material-ui/core'

import './HomePage.css'

const HomePage = () => {
    return (
        // Home page Video NPC with two texts
        <div class="d-grid gap-Vd-m d-block">
            <Container className="Video">
                <h3> Being safe is not enough. Know your rights Know what time is valo time </h3>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Kz-INokaRFs"
                    controls
                    playbackRate = {1}
                    width = "100%"
                    height = "720px"
                />
                <a href="https://www.privacy.gov.ph/" className="Link">Visit the <span className="Highlight">NATIONAL PRIVACY COMMISION</span> to learn more</a>


            </Container>
            {/* Infographics image yung may laptop of death na image */}
            <img src="/images/infographics.jpg" alt="" className="Inforgraphics"/>

            {/* Picture with Link of news example is gatchalian di pa tapos dunno kung pano yung mismong pic lang may clickable link - jeco */}
            <h4> News and Articles </h4>
            <a href="https://www.gmanetwork.com/news/news/nation/798190/nbi-arrests-suspect-behind-hacking-of-gatchalian-s-credit-card/story/">
            <img src="/images/News.jpg" className="News" />
            </a>

        </div>
    )
}

export default HomePage;


