import React,{Fragment, useState} from 'react';
import 'antd/dist/antd.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer'
import Unit from './Unit';
import Circle from './Circle';
import Uniswap from './Uniswap';
import ChocolateNFTs from './ChocolateNFTs';
import Roadmap from './Roadmap';
import BlurDots from './BlurDots';
import {device} from './Device';
import HamburgerMenu from './HamburgerMenu'

const App = () => {
    const [ham,setHam] = useState(true);

    return (
        <Router>
            <Fragment>
            <Container>
            <Wrapper>
                
               {ham?<Unit setHam={setHam} />:<HamburgerMenu setHam={setHam}/>} 
                <Circle/>
                <Uniswap/>
                <ChocolateNFTs/>
                <Roadmap/>
                <BlurDots/>
            <Footer/>
            {/* <HamburgerMenu/> */}

            </Wrapper>

            {/* <Switch>
                <Route exact path="/hamMenu" component={<HamburgerMenu/>}/>
            </Switch> */}
            
        </Container>
            </Fragment>
           
        </Router>
        
    )
}

export default App

const Container = styled.div`
display:flex;
position: relative;
width: 1440px;
height: 4343px;
background: #1A1A1A;
@media ${device.i_pad} { 
    height: 4400px;
    width:768px;
  }
@media ${device.i_phone}{
    width: 375px;
height: 4272px;
}
`

const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;