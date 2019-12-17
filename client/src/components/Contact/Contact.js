import React from 'react'
import styled from 'styled-components' 

const StyledContact = styled.div`
  color: #d79737;
    
`


export default function Contact() {
  return (

  <StyledContact>


  <div>Contact</div>

  <label for="photo"></label>
    <input class="mb-3 form-control-file" type="file" name="photo" id="photo" accept="image/*"></input>
    <input class="btn btn-success" type="submit" value="Post"></input>
    <br/>
  <label for="username"> Company Name</label>
      <input name="username" type="text" class="form-control" id="username" placeholder="Name" required></input>
      <br/>

 <label for="exampleInputEmail1">Email address</label>
      <input name="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="Enter email" required></input>
    <br/>

      <label for="number">Telephone Number</label>
      <input placeholder="(5512345678)" type="text" class="form-control" name="telephone_number" id="number" required></input>
      <br/>

  </StyledContact>
  )
}
