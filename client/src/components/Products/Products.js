import React, {Component} from 'react'
import styled from 'styled-components' 
import { Card } from 'antd';
// import { Link } from 'react-router-dom'
import { MyContext } from '../../context'

const StyledProducts = styled.div`
  color: #d79737;
  box-sizing: border-box;
  justify-items: center;
  
  & div {
    display: flex;
    display: inline-block;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 9px;
    margin-left: 15px;
  }

`


export default class Products extends Component {
  componentDidMount(){
    this.context.handleGetProducts()
  }
  render(){
  return (
    
    <MyContext.Consumer>
    {context => {
      return (
  <StyledProducts>

  {context.products.map((p, i) => (
    <>
    <div>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src= {p.photo} />}
    >
    <p> Nombre de tu producto: {p.nameproduct}</p>
    <p> Descripción de tu producto: {p.descriptionproduct}</p>
    </Card>
    </div>
    </>))}
  </StyledProducts>

 )
}}
</MyContext.Consumer>
)
}
}

Products.contextType = MyContext