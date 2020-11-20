import React from 'react'
import styled from 'styled-components';
import group1c from '../Assets/group1c.png';
import groupline from '../Assets/Groupline.png';
import groupline2 from '../Assets/Groupline2.png';

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
                    <img src={groupline} alt=""/>
                </Group4>
                <Group5>
                <img src={groupline2} alt=""/>
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
                <h2 className="sepdisc1">Blockchain Development</h2>
                <h2 className="sepdisc2">Project Coneptualisation</h2>
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
`
const RoadmapIllus = styled.div`
position: absolute;
width: 189px;
height: 679px;
left: 100px;
top: 152px;
`
const Group1 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 490px;
`
const Group2 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 245px;
`
const Group3 = styled.div`
position: absolute;
width: 189px;
height: 189px;
left: 0px;
top: 0px;
`
const Group4 = styled.div`
position: absolute;
width: 22.7px;
height: 162.73px;
left: 80.23px;
top: 370px;
`
const Group5 = styled.div`
position: absolute;
width: 19.12px;
height: 162.73px;
left: 90px;
top: 125px;
`
const Jandisc = styled.div`
position: absolute;
width: 240px;
height: 71px;
left: 799px;
top: 701px;
`
const Novdisc = styled.div`
position: absolute;
width: 369px;
height: 108px;
left: 799px;
top: 438px;
`
const Sepdisc = styled.div`
position: absolute;
width: 269px;
height: 71px;
left: 799px;
top: 211px;
`