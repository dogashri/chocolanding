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
import ellipsehollow from '../Assets/Ellipsehollow.png'

const Circle = () => {
    return (
        <Container>
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
                <img className="vector" src={vector} alt=""/>
                <MaskGroup></MaskGroup>
                <img className="ellipseblack" src={ellipseblack} alt=""/>
                <img className="ellipsehollow" src={ellipsehollow} alt=""/>
                </Center></Illustration>
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
`
const Lilac = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 238px;
top: 132px;
border-radius: 120px;
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
`
const Red = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 238px;
top: 694px;

border-radius: 120px;
`
const Yellow = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 757px;
top: 748px;

border-radius: 120px;
`
const Purple = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 978px;
top: 531px;

border-radius: 120px;
`
const Cyan = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 955px;
top: 225px;

border-radius: 120px;
`
const Blue = styled.div`
position: absolute;
width: 350px;
height: 140px;
left: 685px;
top: 60px;

border-radius: 120px;
`
const Illustration = styled.div`
position: absolute;
width: 510px;
height: 510px;
left: 465px;
top: 225px;
`
const Center=styled.div`
position: absolute;
width: 510px;
height: 510px;
left: 0px;
top: 0px;
`
const MaskGroup=styled.div`
position: absolute;
width: 390px;
height: 390px;
left: 60px;
top: 60px;
`