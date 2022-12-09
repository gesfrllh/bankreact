import React, { Component } from "react";
import {
  Container,
  Form,
  FormLabel,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormWarp,
  Icon,
  Text,
} from "./SigninElements";

export default class SignIn extends Component{
  constructor(props) {
    super(props)
    this.state={
      email:"",
      password:""
    }
    this.handleSubmit = this.handleSubmit.bind(this); 
  }
  handleSubmit(e){
    e.preveventDefault();
    const {email, password} = this.state;
    console.log(email, password)
  }
  render(){
    return (
      <Container>
        <FormWarp>
          <Icon to="/">Holla</Icon>
          <FormContent onSubmit={this.handleSubmit}>
            <Form action="/">
            <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required onChange={e => this.state({email:e.target.value})}/>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" reqeuired onChange={e => this.state({password:e.target.value})}/>
              <FormButton type="submit" to='/'>Continue</FormButton>
              <Text>Forgot Password</Text>
              <Text type ='submit' to='/signup'>Create a new Account</Text>
            </Form>
          </FormContent>
        </FormWarp>
      </Container>
      );
    }
}