import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll';
import close_big from '../Assets/close_big.png'
import Subtract from '../Assets/Subtract.png';
import Ellipse20 from '../Assets/Ellipse 20.png';
import Ellipse21 from '../Assets/Ellipse 21.png';
import medium from '../Assets/medium.png';
import twitter from '../Assets/twitter.png';
import telegram from '../Assets/telegram.png';
import ellipsefine from '../Assets/Ellipse.png';
import ellipse2 from '../Assets/Ellipse2.png';
import ellipse4 from '../Assets/Ellipse4.png';
import ellipse5 from '../Assets/Ellipse5.png';
import ellipse6 from '../Assets/Ellipse6.png';

const HamburgerMenu = ({setHam}) => {
    // const [showMenu,setShowMenu] = useState(false);
    return (
        <>
        <Container>
            <Header>
                <Group>
                <img className="subtracthead" src={Subtract} alt =""/>
                <img className="ellipse_20head" src={Ellipse20} alt = ""/>
                <img className="ellipse_21head" src = {Ellipse21} alt = ""/>
                </Group>

                <Nav>
                <Link className="tokenheadham"
    activeClass="active"
    key="0"
    to="token"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="tokentext">Token</h1></Link>
<Link className="uniswapheadham"
    activeClass="active"
    to="uniswap"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="uniswaptext">Uniswap</h1></Link>
<Link className="NFTsheadham"
    activeClass="active"
    to="NFTs"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="NFTstext">NFTs</h1></Link>
                <Link className="roadmapheadham"
    activeClass="active"
    to="roadmap"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="roadmaptext">Roadmap</h1></Link>        
                </Nav>
                <Social>
                    <Medium>
                        <img className="mediumhead" src={medium} alt="" />
                    </Medium>
                    <Twitter>
                        <img className="twitterhead" src = {twitter} alt = ""/>
                    </Twitter>
                    <Telegram>
                        <img className="telegramhead" src={telegram} alt=""/>
                    </Telegram>
                </Social>
                <Menuicon onClick={()=>setHam(true)} href="#"> <img  className="menucloseham" src={close_big} alt=""/>
                </Menuicon>
            </Header>
            {/* <BlurDots> */}
                <img className="ellipseunit" src={ellipsefine} alt=""/>
                {/* <img className="ellipse1" src={ellipse1} alt=""/> */}
                <img className="ellipse2" src={ellipse2} alt=""/>
                {/* <img className="ellipse3" src={ellipse3} alt=""/> */}
                <img className="ellipse4ham" src={ellipse4} alt=""/>
                <img className="ellipse5" src={ellipse5} alt=""/>
                <img className="ellipse6" src={ellipse6} alt=""/>
            {/* </BlurDots> */}
        </Container>
        {/* {(showMenu)?<Unit/>:null} */}
    </>)
}

export default HamburgerMenu

const Container  = styled.div`
position: relative;
width: 375px;
height: 812px;
background: #1A1A1A;
/* @media (min-width:375px){
    visibility: hidden;;
} */
`
const Header = styled.div`
 width: 303.5px;
height: 34.52px;
left: 35px;
top: 32px;
`
const Group = styled.div`
 position: absolute;
width: 36px;
height: 34.52px;
left: 35px;
top: 32px;
`
const Nav = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-self:center;
padding: 0px;
position: absolute;
width: 142px;
height: 276px;
left: 117px;
top: 195px;
`

const Menuicon = styled.div`
position: absolute;
width: 32px;
height: 32px;
left: 315px;
top: 32px;
/* @media (max-width:375px){
    display:none */
}`

const Social = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 120px;
height: 24px;
left: 128px;
top: 515px;
`
const Medium = styled.div`
position: static;
width: 24px;
height: 24px;
left: 96px;
top: 0px;
flex: none;
order: 2;
flex-grow: 0;
margin: 24px 0px;
`
const Twitter = styled.div`
position: absolute;
left: 4.13%;
right: 4.17%;
top: 11.01%;
bottom: 10.99%;
`
const Telegram = styled.div`
position: absolute;
left: 4.17%;
right: 4.17%;
top: 8.14%;
bottom: 8.13%;
`