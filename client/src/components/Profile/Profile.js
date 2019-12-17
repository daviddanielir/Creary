import React from 'react'
import styled from 'styled-components' 
import { MyContext } from '../../context'
import { Card } from 'antd';

const StyledProfile = styled.div`
  color: #d79737;
    
`


export default function Profile() {

  return ( 
  
    <MyContext.Consumer>
    {context => {
      return (
  <StyledProfile>
 <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= {context.user.photoURL} />}
  >


<div>Contact</div>
<p> Bienvenido {context.user.name}</p>
<p>  Tu email: {context.user.email}</p>
<p>  Tu empresa es: {context.user.companyname}</p>
<p>  Tu número de contacto es: {context.user.number}</p>
<p> Tu id de usuario es : {context.user._id}</p>

  </Card>,




  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src= {context.user.file} />}
  >



<p>  Tu empresa es: {context.user.companyname}</p>

  </Card>,
 
  </StyledProfile>
   )
  }}
</MyContext.Consumer>
)
}








