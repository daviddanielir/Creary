import React from 'react'
import { Form, Input, Icon, Button } from 'antd'
import { MyContext } from '../../context'

export default function SignupContainer(props) {
  return (

    <MyContext.Consumer>
      {context => (
        <Form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
          <Form.Item>
            <Input
              name="name"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="companyname"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Companyname"
              type="text"
              value={context.formSignup.companyname}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="number"
              prefix={<Icon type="number" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Number"
              type="text"
              value={context.formSignup.number}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="email"
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
              type="email"
              value={context.formSignup.email}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

          <Form.Item>
            <Input
              name="password"
              type="password"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              value={context.formSignup.password}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
          </Form.Item>

{/* 
           <div>
            <input onChange={context.handleFile} type="file" name="file" />
            <input onClick={context.handleSignup} type="submit" value="Send photo"  hidden/>
            </div>
       */}


      {/* //foto de usuario */}
        

          <Form.Item>
            <Button type="primary" htmlType="submit" >
              Signup
            </Button>
          </Form.Item>
        </Form>
      )}
    </MyContext.Consumer>
  )
}



