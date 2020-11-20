import React from 'react'
import styled from 'styled-components'
import blurdot1 from '../Assets/blurdot1.png';
import blurdot2 from '../Assets/blurdot2.png';
import blurdot3 from '../Assets/blurdot3.png';
import blurdot4 from '../Assets/blurdot4.png';
import blurdot5 from '../Assets/blurdot5.png';
import blurdot6 from '../Assets/blurdot6.png';
import blurdot7 from '../Assets/blurdot7.png';

const BlurDots = () => {
    return (
        <Container>
            <img className="blurdot1" src={blurdot1} alt=""/>
            <img className="blurdot2" src={blurdot2} alt=""/>
            <img className="blurdot3" src={blurdot3} alt=""/>
            <img className="blurdot4" src={blurdot4} alt=""/>
            <img className="blurdot5" src={blurdot5} alt=""/>
            <img className="blurdot6" src={blurdot6} alt=""/>
            <img className="blurdot7" src={blurdot7} alt=""/>
        </Container>
    )
}

export default BlurDots
const Container = styled.div`
position: absolute;
width: 1439px;
height: 1978px;
left: -19px;
top: 1738px;

`
