import React, {Component} from 'react'
import styled from 'styled-components' 
import { Card } from 'antd';
// import { Link } from 'react-router-dom'
import { MyContext } from '../../context'

const StyledServices = styled.div`
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


export default class Services extends Component {
  componentDidMount(){
    this.context.handleGetServices()
  }
  render(){
  return (
    
    <MyContext.Consumer>
    {context => {
      return (
  <StyledServices>
<h1>Services</h1>
  {context.services.map((p, i) => (
    <>
    <div>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src= {p.photo} />}
    >
    <p> Nombre de tu servicio: {p.nameservice}</p>
    <p> Descripción de tu servicio: {p.descriptionservice}</p>
    </Card>
    </div>
    </>))}
  </StyledServices>

 )
}}
</MyContext.Consumer>
)
}
}

Services.contextType = MyContext