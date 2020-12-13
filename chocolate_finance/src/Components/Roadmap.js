import React from 'react'
import styled from 'styled-components';
import group1c from '../Assets/group1c.png';
import groupline from '../Assets/Groupline.png';
import groupline2 from '../Assets/Groupline2.png';
import { device } from './Device';

const Roadmap = () => {
    return (
        <Container id="roadmap">
            <h1 className="roadmap">Roadmap</h1>
            <RoadmapIllus>
                <Group1>
                    <img className="group1c" src={group1c} alt=""/>
                </Group1>
                <Group2>
                    <img src={group1c} alt=""/>
                </Group2>
                <Group3>
                <img src={group1c} alt=""/>
                </Group3>
                <Group4>
                    <img className="group4line" src={groupline} alt=""/>
                </Group4>
                <Group5>
                <img className="group4line" src={groupline2} alt=""/>
                </Group5>
            </RoadmapIllus>
            <h1 className="january">January 2021</h1>
            <h1 className="november">November 2020</h1>
            <h1 className="september">September 2020</h1>
            <Jandisc>
                <h2 className="jandisc1">List on CEX</h2>
                <h2 className="jandisc2">NFT Marketplace Open</h2>
            </Jandisc>
            <Novdisc>
                <h2 className="novdisc1">Token Public Sale</h2>
                <h2 className="novdisc2">Uniswap Listing and locked liquidity</h2>
                <h2 className="novdisc3">Yield Farming</h2>
            </Novdisc>
            <Sepdisc>
            <h2 className="sepdisc2">Project Coneptualisation</h2>
                <h2 className="sepdisc1">Blockchain Development</h2>
                
            </Sepdisc>
        </Container>
    )
}

export default Roadmap

const Container = styled.div`
position: absolute;
width: 1440px;
height: 863px;
left: 0px;
top: 3190px;
@media ${device.i_pad}{
    position: absolute;
width: 768px;
height: 791px;
left: 0px;
top: 3389px;
}
@media ${device.i_phone}{
    width:375px;
    height:500px;
    top:3650px;
    overflow-x: auto;
    overflow-y:hidden;
    transform-origin:right;
    .scrollbar-width{
        width:0px;
        height:0px;
    }
    white-space:nowrap;
}
`
const RoadmapIllus = styled.div`
position: absolute;
width: 189px;
height: 679px;
left: 100px;
top: 152px;
@media ${device.i_pad}{
    position: absolute;
width: 176.79px;
height: 717px;
left: 24px;
top: 56px;
}
@media ${device.i_phone}{
    width:815px;
    height:177.79px;
    transform:rotate(90deg);
    width:100%;
    /* top:-200px; */
    left:400px;
    /* overflow-x: auto;
    overflow-y:hidden;
    white-space:nowrap; */
}
`
const Group1 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 490px;
@media ${device.i_phone}{
    display: inline-block;
    /* order:4; */
}
`
const Group2 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 245px;
@media ${device.i_phone}{
    top:175px;
    display: inline-block;
    /* order:2; */
}
`
const Group3 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 0px;
@media ${device.i_phone}{
    display: inline-block;
    top:-135px
    /* width: 176.79px;
height: 189px;
left: 0px;
top: 0px;
    order:0 */
}
`
const Group4 = styled.div`
position: absolute;
width: 22.7px;
height: 162.73px;
left: 80.23px;
top: 370px;
@media ${device.i_phone}{
    top:300px;
    height:256px;
    display: inline-block;
    /* order:3; */
}
`
const Group5 = styled.div`
position: absolute;
width: 19.12px;
height: 162.73px;
left: 90px;
top: 125px;
@media ${device.i_phone}{
    display: inline-block;
    height:256px;
    top:-15px;
    /* order:1;
    position: absolute;
width: 19.12px;
height: 256px;
left: 176px;
top: 0px;
    transform:rotate(-90deg) */
}
`
const Jandisc = styled.div`
position: absolute;
width: 240px;
height: 71px;
left: 799px;
top: 701px;
@media ${device.i_pad}{
    position: absolute;
width: 204px;
height: 72px;
left: 259px;
top: 640px;
}
@media ${device.i_phone}{
    width: 202px;
height: 34px;
left: 670px;
top: 200px; 
}
`
const Novdisc = styled.div`
position: absolute;
width: 369px;
height: 108px;
left: 799px;
top: 438px;
@media ${device.i_pad}{
    position: absolute;
width: 314px;
height: 110px;
left: 259px;
top: 400px;
}
@media ${device.i_phone}{
    width: 202px;
height: 34px;
left: 365px;
top: 200px; 
}
`
const Sepdisc = styled.div`
position: absolute;
width: 269px;
height: 71px;
left: 799px;
top: 211px;
@media ${device.i_pad}{
    position: absolute;
width: 229px;
height: 72px;
left: 259px;
top: 187px;
}
@media ${device.i_phone}{
    width: 202px;
height: 34px;
left: 36px;
top: 200px;
}
`
