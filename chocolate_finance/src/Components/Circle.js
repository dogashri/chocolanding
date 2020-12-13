import React from 'react'
import styled from 'styled-components';
import lilac from '../Assets/lilac.png';
import pink from '../Assets/pink.png';
import red from '../Assets/red.png';
import yellow from '../Assets/yellow.png';
import purple from '../Assets/purple.png';
import cyan from '../Assets/cyan.png';
import blue from '../Assets/blue.png';
import vector from '../Assets/Vector.png'
import ellipseblack from '../Assets/Ellipseblack.png';
import ellipsehollow from '../Assets/Ellipsehollow.png';
import no from '../Assets/no.png';
import etherscan from '../Assets/etherscan.png';
import mining from '../Assets/mining.png';
import {device} from './Device'

const Circle = () => {
    return (
        <Container id="token" key="0">
            <Lilac><CircleDiv><img className="circles" src={lilac} alt=""/></CircleDiv>
            <h1 className="lilacname">LID</h1>
            <h1 className="lilacquant">115 CHOC</h1>
            </Lilac>
            <Pink><CircleDiv><img className="circles" src={pink} alt=""/></CircleDiv>
            <h1 className="pinkname">NFT Rewards</h1>
            <h1 className="pinkquant">1256 CHOC</h1>
            </Pink>
            <Red><CircleDiv><img className="circles" src={red} alt=""/></CircleDiv>
            <h1 className="redname">Marketing</h1>
            <h1 className="redquant">575 CHOC</h1>
            </Red>
            <Yellow><CircleDiv><img className="circles" src={yellow} alt=""/></CircleDiv>
            <h1 className="yellowname">Team</h1>
            <h1 className="yellowquant">575 CHOC</h1>
            </Yellow>
            <Purple><CircleDiv><img className="circles" src={purple} alt=""/></CircleDiv>
            <h1 className="purplename">Liquidity</h1>
            <h1 className="purplequant">2489.75</h1>
            </Purple>
            <Cyan><CircleDiv><img className="circles" src={cyan} alt=""/></CircleDiv>
            <h1 className="cyanname">Presale</h1>
            <h1 className="cyanquant">3450 CHOC</h1>
            </Cyan>
            <Blue><CircleDiv><img className="circles" src={blue} alt=""/></CircleDiv>
            <h1 className="bluename">farming</h1>
            <h1 className="bluequant">3030.25 CHOC</h1>
            </Blue>
            <Illustration><Center>
                {/* <img className="vector" src={vector} alt=""/> */}
                <MaskGroup>
                    <MaskGroup_1></MaskGroup_1>
                </MaskGroup>
                {/* <img className="ellipseblack" src={ellipseblack} alt=""/>
                <img className="ellipsehollow" src={ellipsehollow} alt=""/> */}
                </Center></Illustration>
                <Buttons>
                    <ButtonAudit>
                        <AuditFrame>
                            <img className="auditicon" src={no} alt=""/>
                            <h1 className="audit">Audit</h1>
                        </AuditFrame>
                    </ButtonAudit>
                    <ButtonFarm>
                        <FarmFrame>
                            <img className="farmicon" src={mining} alt=""/>
                            <h1 className="farm">Farm Now</h1>
                        </FarmFrame>
                    </ButtonFarm>
                    <ButtonEtherscan>
                        <EtherscanFrame>
                            <img className="ehterscanicon" src={etherscan} alt=""/>
                            <h1 className="etherscan">Etherscan</h1>
                        </EtherscanFrame>
                    </ButtonEtherscan>
                </Buttons>
        </Container>
    )
}

export default Circle

const Container = styled.div`
position: absolute;
width: 1440px;
height: 1108px;
left: 0px;
top: 800px;
@media ${device.i_pad} { 
    width: 676px;
height: 614px;
left: 59px;
top: 862px;
  }
@media ${device.i_phone}{
    width:375px;
    height:750px;
    left:2px;
    top:775px;
}
`
const Lilac = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 238px;
top: 132px;
border-radius: 120px;
/* position: absolute;
width: 291px;
height: 140px;
left: 84px;
top: 866px; */
@media ${device.i_pad}{
left:0px;
top: 438px;
}
@media ${device.i_phone}{
    position: absolute;
width: 350px;
height: 140px;
left: 2px;
top: 600px;
}
`
const CircleDiv=styled.div`
position: absolute;
width: 140px;
height: 140px;
left: 0px;
top: 0px;
`
const Pink = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 87px;
top: 381px;
border-radius: 120px;
@media ${device.i_pad}{
left: 326px;
top: 404px;
}
@media ${device.i_phone}{
    position: absolute;
width: 291px;
height: 140px;
left: 84px;
top: 500px;
}
`
const Red = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 238px;
top: 694px;
border-radius: 120px;
@media ${device.i_pad}{
left: 0px;
top: 298px;
}
@media ${device.i_phone}{
    position: absolute;
width: 350px;
height: 140px;
left: 2px;
top: 400px;
}
`
const Yellow = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 757px;
top: 748px;
border-radius: 120px;
@media ${device.i_pad}{
left: 326px;
top: 246px;
}
@media ${device.i_phone}{
    position: absolute;
width: 291px;
height: 140px;
left: 84px;
top: 300px;
}
`
const Purple = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 978px;
top: 531px;
border-radius: 120px;
@media ${device.i_pad}{
left: 0px;
top: 158px;
}
@media ${device.i_phone}{
    position: absolute;
width: 350px;
height: 140px;
left: 2px;
top: 200px;

}
`
const Cyan = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 955px;
top: 225px;
border-radius: 120px;
@media ${device.i_pad}{
left: 326px;
top: 87px;
}
@media ${device.i_phone}{
    position: absolute;
width: 291px;
height: 140px;
left: 84px;
top: 100px;
}
`
const Blue = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 685px;
top: 60px;
border-radius: 120px;
@media ${device.i_pad}{
    position: absolute;
left: 0px;
top: 0px;
}
@media ${device.i_phone}{
    position:absolute;
    left: 0px;
top: 0px;
}
`
const Illustration = styled.div`
position: absolute;
width: 510px;
height: 510px;
left: 465px;
top: 225px;
@media ${device.i_pad} { 
    display:none
  }
`
const Center=styled.div`
position: absolute;
width: 510px;
height: 510px;
left: 0px;
top: 0px;
border-radius: 50%;
    border: solid 3px transparent;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(101deg, #f75f80, #dd6696, #9d78cd, #877edf, #6d85f6);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #1a1a1a inset;
`
const MaskGroup=styled.div`
position: absolute;
width: 390px;
height: 390px;
left: 60px;
top: 60px;
background: #29292c;
    border-radius: 50%;
`
const MaskGroup_1 = styled.div`
position: absolute;
width: 302px;
height: 302px;
left: 45px;
top: 45px;
border: 2px solid #3f3f42;
    border-radius: 50%;
display:flex;
align-content:center;
`
const Buttons = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 768px;
height: 71px;
left: 336px;
top: 1006px;
@media ${device.i_pad}{
    position: absolute;
width: 648px;
height: 71px;
left: 1px;
top: 678px;
}
@media ${device.i_phone}{
    display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
position: absolute;
width: 295px;
height: 261px;
left: 40px;
top: 775px;
}
`
const ButtonAudit = styled.div`
position: static;
width: 224px;
height: 71px;
left: calc(50% - 224px/2 + 272px);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #A965EC;
border-radius: 50px;
flex: none;
order: 2;
flex-grow: 0;
margin-left: 48px;
@media ${device.i_pad}{
    position: static;
width: 200px;
height: 71px;
left: calc(50% - 200px/2 + 224px);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #A965EC;
border-radius: 50px;
flex: none;
order: 2;
flex-grow: 0;
margin-left: 24px;
@media ${device.i_phone}{

position: static;
width: 279px;
height: 71px;
left: calc(50% - 279px/2);
top: calc(50% - 71px/2 + 95px);
background: #1A1A1A;
border: 2px solid #A965EC;
border-radius: 50px;
flex: none;
order: 2;
flex-grow: 0;
margin-left:0px;
margin-top:24px;
}
}
`
const ButtonFarm = styled.div`
position: static;
width: 224px;
height: 71px;
left: calc(50% - 224px/2);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #6D85F6;
border-radius: 50px;
flex: none;
order: 1;
flex-grow: 0;
margin-left: 48px;
@media ${device.i_pad}{
    position: static;
width: 200px;
height: 71px;
left: calc(50% - 200px/2);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #6D85F6;
border-radius: 50px;
flex: none;
order: 1;
flex-grow: 0;
margin-left: 24px;
@media ${device.i_phone}{
    position: static;
width: 279px;
height: 71px;
left: calc(50% - 279px/2);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #6D85F6;
border-radius: 50px;
flex: none;
order: 1;
flex-grow: 0;
margin-left:0px;
margin-top:24px;
}
}
`
const ButtonEtherscan = styled.div`
position: static;
width: 224px;
height: 71px;
left: calc(50% - 224px/2 - 272px);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #EF6287;
border-radius: 50px;
flex: none;
order: 0;
flex-grow: 0;
margin: 48px 0px;
@media ${device.i_pad}{
    position: static;
width: 200px;
height: 71px;
left: calc(50% - 200px/2 - 224px);
top: calc(50% - 71px/2);
background: #1A1A1A;
border: 2px solid #EF6287;
border-radius: 50px;
flex: none;
order: 0;
flex-grow: 0;
margin-left: 0px;
}
@media ${device.i_phone}{
    position: static;
width: 279px;
height: 71px;
left: calc(50% - 279px/2);
top: calc(50% - 71px/2 - 95px);
background: #1A1A1A;
border: 2px solid #EF6287;
border-radius: 50px
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 24px;
}
`
const AuditFrame = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 107px;
height: 27px;
left: calc(50% - 224px/2 + 340px);
top: calc(50% - 27px/2 + 0.5px);
@media ${device.i_pad}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 98px;
height: 24px;
left: calc(50% - 98px/2 + 220px);
top: calc(50% - 24px/2 + 0.5px);
}
@media ${device.i_phone}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 90px;
height: 24px;
left: calc(50% - 90px/2 - 9px);
top: calc(50% - 24px/2 + 105px);
}
`
const FarmFrame = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 159px;
height: 27px;
left: calc(50% - 224px/2 + 40px);
top: calc(50% - 27px/2 + 0.5px);
@media ${device.i_pad}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: absolute;
width: 143px;
height: 24px;
left: calc(50% - 143px/2 - 9.5px);
top: calc(50% - 24px/2 + 0.5px);
}
@media ${device.i_phone}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 128px;
height: 24px;
left: calc(50% - 128px/2 - 9.5px);
top: calc(50% - 24px/2 + 5px);
}
`
const EtherscanFrame = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 159px;
height: 27px;
left: calc(50% - 159px/2 - 270px);
top: calc(50% - 27px/2 + 0.5px);
@media ${device.i_pad}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
position: absolute;
width: 143px;
height: 24px;
left: calc(50% - 143px/2 - 240px);;
top: ;
};
@media ${device.i_phone}{
    display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: absolute;
width: 128px;
height: 24px;
left: calc(50% - 128px/2 - 19px);
top: calc(50% - 71px/2 - 70px);
}
`