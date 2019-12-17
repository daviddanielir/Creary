import React from 'react'
import styled from 'styled-components' 
import { Card } from 'antd';
import { Link } from 'react-router-dom'
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
          {Products.map(products => (
            <Link key={products.id} to={`/products/${products.id}`}>
              <img src={products.image} alt={products.name} width="80px" />
            </Link>
          ))}
        </Card>

  </StyledProducts>

 )
}}

</MyContext.Consumer>
)
}



