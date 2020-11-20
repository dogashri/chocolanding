import React from 'react'
import styled from 'styled-components'
import lock from '../Assets/lock.png';
import ethereum from '../Assets/etherium.png';
import write from '../Assets/write.png'

const Uniswap = () => {
    return (
        <Container id = "uniswap">
            <h1 className="uniswap">Uniswap</h1>
            <Blocks>
                <Block1>
                    <Rectangle1>
                        <img className="lock" src={lock} alt=""/>
                        <h1 className="lockliq">Locked Liquidity</h1>
                        <h2 className="lockdisc">Our liquidity lock will be forever.There is no rug & pull</h2>
                    </Rectangle1>
                </Block1>
                <Block2>
                    <Rectangle2>
                        <img className="ethereum" src={ethereum} alt=""/>
                        <h1 className="eth70">70% Raise on Lock</h1>
                        <h2 className="ethdisc">70% of our raise will be locked for liquidity</h2>
                    </Rectangle2>
                </Block2>
                <Block3>
                    <Rectangle3>
                        <img className="write" src={write} alt=""/>
                        <h1 className="writeimm">Immediate Listing</h1>
                        <h2 className="writedisc">After the presale,CHOC will be listed on uniswap</h2>
                    </Rectangle3>
                </Block3>
            </Blocks>
        </Container>
    )
}

export default Uniswap

const Container  = styled.div`
position: absolute;
width: 1440px;
height: 604px;
left: 0px;
top: 1940px;
`
const Blocks = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;

position: absolute;
width: 1200px;
height: 240px;
left: 120px;
top: 215px;
`
const Block1 = styled.div`
position: static;
width: 334px;
height: 240px;
left: 866px;
top: 0px;
flex: none;
order: 2;
flex-grow: 0;
margin: 99px 0px;
`
const Block2 = styled.div`
position: static;
width: 334px;
height: 240px;
left: 433px;
top: 0px;
flex: none;
order: 1;
flex-grow: 0;
margin: 99px 0px;
`
const Block3 = styled.div`
position: static;
width: 334px;
height: 240px;
left: 0px;
top: 0px;
flex: none;
order: 0;
flex-grow: 0;
margin: 99px 0px;
`
const Rectangle1=styled.div`
position: absolute;
width: 334px;
height: 240px;
left: 866px;
top: 0px;

/* Main / Dark-gray */

background: #222222;
border-radius: 40px;
`
const Rectangle2 =styled.div`
position: absolute;
width: 334px;
height: 240px;
left: 433px;
top: 0px;

/* Main / Dark-gray */

background: #222222;
border-radius: 40px;
`
const Rectangle3 = styled.div`
position: absolute;
width: 334px;
height: 240px;
left: 0px;
top: 0px;

/* Main / Dark-gray */

background: #222222;
border-radius: 40px;
`