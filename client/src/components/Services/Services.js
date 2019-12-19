import React from 'react'
import styled from 'styled-components' 
import { Card } from 'antd';
// import { Link } from 'react-router-dom'
import { MyContext } from '../../context'

const StyledProducts = styled.div`
  color: #d79737;
  & form {
    justify-content: space-around
    flex-wrap: wrap;
    align-items: flex-start;
    display: flex;
    margin-top: 20px;
  }

`


export default function Products() {
  return (
    
    <MyContext.Consumer>
    {context => {
      return (
  <StyledProducts>
  <div> Lista de Productos</div>

  {/* {Products.map((products, index) => ( */}
  <form>
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= {context.products.photo} />}
  >
  <p> Nombre de tu producto: {context.products.nameproduct}</p>
  <p> Descripción de tu producto: {context.products.descriptionproduct}</p>
  </Card>
  </form>
  </StyledProducts>

 )
}}
</MyContext.Consumer>
)
}



