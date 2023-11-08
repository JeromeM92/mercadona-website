import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;
const Title = styled.h1`
  padding-bottom: 100px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`;
const Label = styled.label`
  padding-bottom: 10px;
  font-size: 15px
`;
const Input = styled.input`
  height: 40px;
  border: 1px solid #239C6B;
  background-color: #E7E7E7;
  width: 240px;
  margin-bottom: 30px;
  border-radius: 10px;
`;
const LoginButton = styled.button`
  border: 1px solid #239C6B;
  background-color: #F5B51D;
  border-radius: 20px;
  font-size: 15px;
  height: 40px;
  width: 115px;
  font-family: 'carme-regular';
  margin-top: 20px; /* Ajoutez une marge au-dessus du bouton */
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  handleLogin = () => {
    const { email, password } = this.state;
    
  }

  render() {
    return (
      <StyledDiv>
        <Title>Connexion</Title>
        <InputContainer>
          <Label htmlFor="email">E-mail :</Label>
          <Input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}>
          </Input>

        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Mot de passe :</Label>
          <Input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}>
          </Input>
        </InputContainer>
        <LoginButton onClick={this.handleLogin}>Connexion</LoginButton>
      </StyledDiv>


    );
  }
}

export default Login;