import React from 'react'
import styled from 'styled-components';
import ellipsenft from '../Assets/Ellipsenft.png';
import ellipsenftblack from '../Assets/Ellipsenftblack.png';
import ellipsenftpink from '../Assets/Ellipsenftpink.png';
import Btnsec from '../Assets/Btnsec.png';

const ChocolateNFTs = () => {
    return (
        <Container id="NFTs">
            <NFTbg></NFTbg>
            <h1 className="choconfts">Chocolate NFTs</h1>
            <h2 className="choconftdisc">Chocolate Finance allows users to farm,earn, and trade rare chocolate themed NFTs</h2>
            <img className="btn-sec" src={Btnsec} alt=""/>
            <NFTillus>
               
                <img className="ellipsenft" src={ellipsenft} alt=""/>
                <img className="ellipsenftblack" src={ellipsenftblack} alt=""/>
                <img className="ellipsenftpink" src={ellipsenftpink} alt=""/>
                <ShadowEllipse></ShadowEllipse>
            </NFTillus>
        </Container>
    )
}

export default ChocolateNFTs

const Container  = styled.div`
position: absolute;
width: 1440px;
height: 606px;
left: 0px;
top: 2544px;
`
const NFTbg = styled.div`
position: absolute;
width: 1240px;
height: 403px;
left: 100px;
top: 138px;

/* Main / Dark-gray */

background: #222222;
border-radius: 64px;
`
const NFTillus = styled.div`
position: absolute;
width: 439px;
height: 413px;
left: 877px;
top: 72px;
`
const ShadowEllipse  = styled.div`
position: absolute;
width: 253px;
height: 253px;
left: 100px;
top: 160px;

background: linear-gradient(180deg, rgba(55, 52, 62, 0.15) 0%, rgba(14, 14, 15, 0.2) 100%);
box-shadow: inset 1.11719px 0px 1.11719px rgba(235, 235, 235, 0.1), inset -1.11719px 0px 1.11719px rgba(235, 235, 235, 0.1), inset 0px -4.46875px 1.11719px rgba(207, 182, 224, 0.11);
backdrop-filter: blur(11.17px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 200px;
`