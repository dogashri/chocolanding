import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import Subtract from '../Assets/Subtract.png';
import Ellipse20 from '../Assets/Ellipse 20.png';
import Ellipse21 from '../Assets/Ellipse 21.png';
import medium from '../Assets/medium.png';
import twitter from '../Assets/twitter.png';
import telegram from '../Assets/telegram.png';
import fire from '../Assets/fire.png';
import ellipsefine from '../Assets/Ellipse.png';
import ellipse1 from '../Assets/Ellipse (1).png';
import ellipse2 from '../Assets/Ellipse2.png';
import ellipse3 from '../Assets/Ellipse3.png';
import ellipse4 from '../Assets/Ellipse4.png';
import ellipse5 from '../Assets/Ellipse5.png';
import ellipse6 from '../Assets/Ellipse6.png';
import hamicon from '../Assets/menu.svg'
import {device} from './Device';


const Unit = ({setHam}) => {
    // const[hamMenu,setHamMenu] = useState(false)
    // const showMenu = ()=>setHamMenu(!hamMenu)
  
    return (<>
        <Container>
            <Header>
                <Group>
                <img className="subtracthead" src={Subtract} alt =""/>
                <img className="ellipse_20head" src={Ellipse20} alt = ""/>
                <img className="ellipse_21head" src = {Ellipse21} alt = ""/>
                </Group>
                <Nav>
                <Link
    activeClass="active"
    key="0"
    to="token"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="tokenhead">Token</h1></Link>
<Link
    activeClass="active"
    to="uniswap"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="uniswaphead">Uniswap</h1></Link>
<Link
    activeClass="active"
    to="NFTs"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="NFTshead">NFTs</h1></Link>
                <Link
    activeClass="active"
    to="roadmap"
    spy={true}
    smooth={true}
    offset={0}
    duration={500}
><h1 className="roadmaphead">Roadmap</h1></Link>        
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
                <Menuicon onClick={()=>setHam(false)} href="#"> <img  className="menuicon" src={hamicon} alt=""/>
                </Menuicon>
            </Header>
            {/* {hamMenu?<HamburgerMenu/>:null} */}
            <h1 className="financehead">Finance</h1>
            <h1 className="chocolatehead">Chocolate</h1>
            <h1 className="chocdischead">Chocolate is an experimental project combining the features of Defi and NFT farming</h1>
            <Button>
                <Frame>
                    <img className="fireunit" src={fire} alt=""/>
                    <h1 className="aboutchoc">About Chocolate</h1>
                </Frame>
            </Button>
            <BlurDots>
                <img className="ellipseunit" src={ellipsefine} alt=""/>
                <img className="ellipse1" src={ellipse1} alt=""/>
                <img className="ellipse2" src={ellipse2} alt=""/>
                <img className="ellipse3" src={ellipse3} alt=""/>
                <img className="ellipse4" src={ellipse4} alt=""/>
                <img className="ellipse5" src={ellipse5} alt=""/>
                <img className="ellipse6" src={ellipse6} alt=""/>
            </BlurDots>
        </Container>
        {/* {(!hamMenu)?null:<HamburgerMenu/>} */}
    </>)
}

export default Unit

const Container = styled.div`
position: absolute;
width: 1440px;
height: 800px;
left: 0px;
top: 0px;
@media ${device.i_pad}{
    width:768px
}
@media ${device.i_phone}{
    width:375px;
}
`
const Header = styled.div`
position: absolute;
width: 1440px;
height: 100px;
left: 0px;
top: 0px;
@media ${device.i_pad}{
    position: absolute;
width: 640px;
height: 34.52px;
left: 64px;
top: 32px;
}
@media ${device.i_phone}{
    width: 303.5px;
height: 34.52px;
left: 35px;
top: 32px;
}
`
const Group = styled.div`
position: absolute;
width: 36px;
height: 34.52px;
left: 120px;
top: 32px;
@media ${device.i_pad}{
    position: absolute;
width: 36px;
height: 34.52px;
left: 0px;
top: 0px;

}
`
const Nav = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 479px;
height: 27px;
left: 481px;
top: 37px;
@media ${device.i_pad}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 292px;
height: 20px;
left: 144.51px;
top: 0px;
}
@media ${device.i_phone}{
    display:none
}
`
const Social = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 144px;
height: 24px;
left: 1176px;
top: 38px;
@media ${device.i_pad}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 120px;
height: 24px;
left: 484px;
top: 0px;
right:64px;
}
@media ${device.i_phone}{
    display:none;
}
`
const Menuicon = styled.div`
position: absolute;
width: 32px;
height: 32px;
left: 275.5px;
top: 0px;
@media (min-width:768px){
    display:none
}
/* @media ${device.laptopL}{
    display:none;
}
@media ${device.desktop}{
    display:none;
} */
`

const Medium = styled.div`
position: static;
width: 24px;
height: 24px;
left: 120px;
top: 0px;
flex: none;
order: 2;
align-self: center;
flex-grow: 0;
margin-left: 36px;
`
const Twitter = styled.div`
position: static;
width: 24px;
height: 24px;
left: 60px;
top: 0px;
flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin-left: 36px;
`
const Telegram = styled.div`
position: static;
width: 24px;
height: 24px;
left: 0px;
top: 0px;
flex: none;
order: 0;
align-self: center;
flex-grow: 0;
margin: 36px 0px;
`
const Button = styled.button`
position: absolute;
width: 343px;
height: 75px;
left: 549px;
top: 628px;

/* Main / Gradient */

background: linear-gradient(73.97deg, #F75F80 5.58%, #DD6696 20.95%, #9D78CD 37.28%, #877EDF 58.91%, #6D85F6 82.17%);
border-radius: 50px;
@media ${device.i_pad}{
    position: absolute;
width: 296px;
height: 75px;
left: 236px;
top: 695px;
}
@media ${device.i_phone}{
    position: absolute;
width: 259px;
height: 65px;
left: 58px;
top: 615px;
}
`
const Frame = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 263px;
height: 31px;
left: calc(50% - 263px/2 + 8px);
top: calc(50% - 31px/2);
`
const BlurDots = styled.div`
position: absolute;
width: 1312px;
height: 426px;
left: 65px;
top: 144px;
@media ${device.i_pad}{
    width:612px;
    height:694px;
    left:87px
}
@media ${device.i_phone}{
    position: absolute;
width: 298px;
height: 627px;
left: 35px;
top: 112px;
}
`