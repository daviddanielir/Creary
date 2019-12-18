import React from 'react'
import styled from 'styled-components' 
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

const StyledAddProduct = styled.div`
  color: #d79737;
    
`


export default function AddProduct(props) {
  return (
    
    <>
<MyContext.Consumer>
      {context => (
        <StyledAddProduct>
        <Form  
            onSubmit={ e => {
            context.handleCreateProduct(e)
            props.history.push('/products')
        }}

        >
          <Form.Item>
            <Input
                name="nameproduct"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Producto"
                type="text"
              value={context.formAddProduct.nameproduct}
              onChange={e => context.handleInput(e, 'formAddProduct')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="descriptionproduct"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Descripción"
              type="text"
              value={context.formAddProduct.descriptionproduct}
              onChange={e => context.handleInput(e, 'formAddProduct')}
            />
          </Form.Item>   

          <div>
            <div className="file"></div>
                <input onChange={e => context.handleFile(e, 'formAddProduct')} type="file" name="file" />
             
            </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Agregar Producto
            </Button>
          </Form.Item>
        </Form>
      </StyledAddProduct>
      )}
    </MyContext.Consumer>
  


</>
  )
}






