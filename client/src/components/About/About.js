import React from 'react'
import styled from 'styled-components' 

const StyledAbout = styled.div`
  color: #d79737;

`


export default function About() {
  return (
  <StyledAbout>
  <label for="description">Description</label>
    <input class="mb-3 form-control" type="text" name="description" id="descript"></input> 
     </StyledAbout>
  )
}
