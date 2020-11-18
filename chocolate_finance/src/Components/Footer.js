import React from 'react'
import styled from 'styled-components';
import Subtract from '../Assets/Subtract.png';
import Ellipse20 from '../Assets/Ellipse 20.png';
import Ellipse21 from '../Assets/Ellipse 21.png';

const Footer = () => {
    return (
        <Container>
            <Menu>
                <Roadmap>Roadmap</Roadmap>
                <NFTs>NFTs</NFTs>
            <Uniswap>Uniswap</Uniswap>
                <Token>Token</Token>
                
            </Menu>
            <h1 className="chocolatetext">2020 Chocolate. All rights reserved</h1>
            <Group>
                {/* <Subs> */}
                    <img className="subtract" src={Subtract} alt =""/>
                    {/* </Subs> */}
                {/* <Ellips20> */}
                    <img className="ellipse_20" src={Ellipse20} alt = ""/>
                    {/* </Ellips20> */}
                {/* <Ellips21> */}
                    <img className="ellipse_21" src = {Ellipse21} alt = ""/>
                    {/* </Ellips21> */}
            </Group>
        </Container>
    )
}

export default Footer

const Container = styled.div`
position: absolute;
height: 290px;
left: 0px;
right: 0px;
top: 4053px;
backdrop-filter: blur(28px);
`
const Menu = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 479px;
height: 27px;
left: 481px;
top: 166px;
`
const Roadmap = styled.div`
position: static;
width: 111px;
height: 27px;
left: 368px;
top: 0px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
color: #FFFFFF;
flex: none;
order: 3;
align-self: center;
flex-grow: 0;
margin-left: 48px;
`

const NFTs = styled.div`
position: static;
width: 56px;
height: 27px;
left: 264px;
top: 0px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
color: #FFFFFF;
flex: none;
order: 2;
align-self: center;
flex-grow: 0;
margin-left: 48px;
`

const Uniswap = styled.div`
position: static;
width: 99px;
height: 27px;
left: 117px;
top: 0px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
color: #FFFFFF;
flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin-left: 48px;
`

const Token = styled.div`
position: static;
width: 69px;
height: 27px;
left: 0px;
top: 0px;
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 27px;
color: #FFFFFF;
flex: none;
order: 0;
align-self: center;
flex-grow: 0;
`
// const ChocolateText = styled.div`
// position: absolute;
// width: 280px;
// height: 23px;
// right: 580px;
// top: 219px;

// font-family: Montserrat;
// font-style: normal;
// font-weight: 500;
// font-size: 15px;
// line-height: 23px;
// color: #9A9EA3;
// `
const Group = styled.div`
position: absolute;

left: 47.57%;
right: 47.57%;
top: 13%;
bottom: 63.86%;
width:70px;
height:67.12px;
`

// const Subs = styled.div`
// position: absolute;
// left: 47.57%;
// right: 48.45%;
// top: 13%;
// bottom: 63.86%;
/* width:57.35px;
height:67.12px */

// `

// const Ellips21 = styled.div`
// position: absolute;
// left: 51.2%;
// right: 47.57%;
// top: 21.52%;
// bottom: 72.38%;
// width:17.69px;
// height:17.69px;
// `
// const Ellips20 = styled.div`
// position: absolute;
// left: 49.14%;
// right: 49.34%;
// top: 20.78%;
// bottom: 71.64%;
// width:21.97px;
// height:21.97px
// `
