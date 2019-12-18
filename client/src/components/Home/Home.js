import React from 'react'
import styled from 'styled-components' 

import { Carousel, Card, Collapse } from 'antd';

const { Panel } = Collapse;
const text = (
  <p style={{ paddingLeft: 24, fontSize: 20 }}>
    Creary es una aplicación que te permite crear una galería, catálogo o un muestrario de tus productos o servicios.
    1.- Crea un perfil proporcionando tus datos de contacto, estos estaras disponibles para las personas que se interesen en tus productos o servicios y les sea facil ponerse en contacto contigo, ya sea para cerrar una venta o para pedirte mayor información.
    2.- Agrega imagenes con las descripciones de tus productos o servicios, estas seran parte de tu catálogo de ventas.
    3.- Comparte tu perfil / catálogo con tus clientes o en tus redes sociales, este contendrá tu informacion de contacto y la galería de tus productos o servicios.
  </p>
);
const text2 = (
  <p style={{ paddingLeft: 24, fontSize: 20 }}>
  Tener un catálogo de ventas por internet te da la oportunidad de mostrar y compartir los productos o servicios que ofreces, ya se que tengas un local establecido o tus ventas sean por contacto directo, esta apliación te permite mostrarle a tus clientes la variedad de productos que tienes, sus descripciones y si lo deseas los precios, si eres comerciante puedes mostrar fotos de tus productos, si ofreces un servicio puedes mostrar un muestrario mostrando los trabajos que has realizado.  </p>
);
const text3 = (
  <p style={{ paddingLeft: 24, fontSize: 20 }}>
Muchos no estamos interesados en tener ventas Online, con pagos o depositos bancarios,  y para no perdernos del radar de internet, podemos usar esta herramienta, teniendo presencia en el mundo del internet, teniendo la posibilidad de compartir nuestros trabajos o productos con cualquier persona en cualquier lugar, al tener nuestra información de contacto, los clientes interesados tendran un contacto directo con nosotros, ya sea para cerrar una venta o para pedir mayor informacion. Sea cual sea el caso, definitivamente el tener un catalogo/muestrario por internet aumentara potencialmente la difución de nuestra empresa o negocio generando un mayor número de ventas y de reconocimiento. 
  </p>
);


const StyledHome = styled.div`
padding: 0 10px;
text-align: center;
.ant-carousel .slick-slide {
  text-align: center;
  display: flex;
    height: 110px;
    width: 600px;

    background: #add6ca;
    font-size: 26px;
    display: flex;
    justify-content: center;

  }
  
  .ant-carousel .slick-slide h3 {
    color: black;
    display: flex;
    justify-content: center;
    padding: 27px;
  }

  & form {
    justify-content: space-around
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    margin-top: 20px;
  }



`


export default function Home() {
  return (
  <StyledHome>  

  <Carousel autoplay>
    <div>
      <h3>¡El primer creador de Catalos Online para tu negocio! <span role="img" aria-label="sheep">📲</span></h3>
    </div>
    <div>
      <h3>¡Crea un perfil y proporciona tus datos de contacto!<span role="img" aria-label="sheep">👥</span></h3>
    </div>
    <div>
      <h3>¡Sube las fotos y descripciones de tus productos! <span role="img" aria-label="sheep">👀</span></h3>
    </div>
    <div>
      <h3>¡Comparte tu perfil para difundir los productos de tu negocio por internet!<span role="img" aria-label="sheep">👌🏼</span></h3>
    </div>
  </Carousel>

  <form>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= 'https://kopisoft.com/Content/Resources/Image/Home/rocket.png' />}>
<h2>¡Aumenta las ventas de tu negocio!</h2>
  </Card>

  
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= 'https://www.zoco.cl/wp-content/uploads/2018/05/apolo.png' />}>
<h2>Aumenta tu presencia en el mercado!</h2>
  </Card>
  <Card
    hoverable
    style={{ width: 240}}
    cover={<img  style={{ height: 240}} alt="example" src= 'http://www.opus.com.uy/contentimg/518/1/d/crm.png' />}>
<h2>¡Llega a más personas de forma rapida!</h2>
  </Card>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= 'https://pymdigital.com/wp-content/uploads/2018/04/phone-receiver-400x400.png' />}>
<h2>¡Genera mayor difución y genera nuevos clientes!</h2>
  </Card>

  </form>


  <Collapse bordered={false} defaultActiveKey={['1']}>
    <Panel style={{ fontSize: 25}} header="¿Qué es Creary? Guía rapida de Usuario" key="1">
      {text}
    </Panel>
    <Panel style={{ fontSize: 25}} header="En qué me beneficia tener un catálogo de ventas?" key="2">
      {text2}
    </Panel>
    <Panel style={{ fontSize: 25}} header="¿Por que no tengo Ventas Online?" key="3">
      {text3}
    </Panel>
  </Collapse>

  </StyledHome>
  )
}




