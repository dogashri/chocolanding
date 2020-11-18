import React from 'react';
import styled from 'styled-components';
import Footer from './Footer'
import Unit from './Unit';
import Circle from './Circle';

const App = () => {
    return (
        <Container>
            <Wrapper>
                <Unit/>
                <Circle/>
            <Footer/>
            </Wrapper>
            
        </Container>
    )
}

export default App

const Container = styled.div`
display:flex;
position: relative;
width: 1440px;
height: 4343px;
background: #1A1A1A;
`

const Wrapper = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;