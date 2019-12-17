import React from 'react'
import styled from 'styled-components' 

import { Carousel } from 'antd';


const StyledHome = styled.div`
.ant-carousel .slick-slide {
  text-align: center;
  display: flex;
    height: 110px;
    width: 600px;

    background: #d79737;
    font-size: 26px;
    display: flex;
    justify-content: center;

  }
  
  .ant-carousel .slick-slide h3 {
    color: black;
    display: flex;
    justify-content: center;
  }
`


export default function Home() {
  return (
  <StyledHome>  

  <Carousel autoplay>
    <div>
      <h3>¡El primer creador de Catalos Online para dar a conocer los productos de tu negocio! in <span role="img" aria-label="sheep">📲</span></h3>
    </div>
    <div>
      <h3>¡Crea un perfil con tus datos de contacto!<span role="img" aria-label="sheep">👥</span></h3>
    </div>
    <div>
      <h3>¡Sube las fotos y descripciones de tus productos! <span role="img" aria-label="sheep">👀</span></h3>
    </div>
    <div>
      <h3>¡Comparte tu perfil para difundir los productos de tu negocio por internet!<span role="img" aria-label="sheep">👌🏼</span></h3>
    </div>
  </Carousel>,

  </StyledHome>
  )
}
