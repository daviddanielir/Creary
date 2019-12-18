import React from 'react'
import styled from 'styled-components' 
import { Card } from 'antd';
// import { Link } from 'react-router-dom'
import { MyContext } from '../../context'

const StyledProducts = styled.div`
  color: #d79737;
    
`


export default function Products() {
  return (
    
    <MyContext.Consumer>
    {context => {
      return (
  <StyledProducts>
  <div> Lista de Productos</div>
  <Card>
          <h1>Productos</h1>
          {/* {Products.map(products => (
            <p> Bienvenido {context.product.nameproduct}</p>
            <p> Bienvenido {context.product.descriptionproduct}</p>
              <img src={context.product.photo} alt={context.product.nameproduct} width="80px" />
            </Link>
          ))} */}
        </Card>

  </StyledProducts>

 )
}}

</MyContext.Consumer>
)
}



