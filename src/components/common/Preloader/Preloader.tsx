import React from 'react'
import loader from './../../../assets/images/loader.svg'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;

  img {
    height: 120px;
    width: 120px;
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(3600deg);
    }
  }
`

const Preloader: React.FC = () => {
    return (
        <StyledDiv>
            <img src={loader} alt={'loading'}/>
        </StyledDiv>
    )
}

export default Preloader
