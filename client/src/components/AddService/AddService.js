import React from 'react'
import styled from 'styled-components' 
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

const StyledAddService = styled.div`
  color: #d79737;
    
`


export default function AddService(props) {
  return (
<MyContext.Consumer>
      {context => (
        <StyledAddService>
        <Form  
            onSubmit= { e => {
            context.handleCreateService(e)
            props.history.push('/services')
        }}
        >
          <Form.Item>
            <Input
                name="nameservice"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Servicio"
                type="text"
              value={context.formAddService.nameservice}
              onChange={e => context.handleInput(e, 'formAddService')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="descriptionservice"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Descripción"
              type="text"
              value={context.formAddService.descriptionservice}
              onChange={e => context.handleInput(e, 'formAddService')}
            />
          </Form.Item>   

          <div>
            <div className="photo"></div>
                <input onChange={context.handleFile} type="file" name="photo"  />
             
            </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Agregar Servicio
            </Button>
          </Form.Item>
        </Form>
      </StyledAddService>
      )}
    </MyContext.Consumer>
  )
}






