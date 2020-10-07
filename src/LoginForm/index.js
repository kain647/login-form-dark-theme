import React, {useState} from "react";
import {
  Container,
  Header,
  ContainerInput,
  Input,
  Button,
  ForgotPasswordContainer,
  Text,
  Register,
  Line,
  ContainerUsername,
  ContainerPassword,
  Eye
} from "./styles";

const LoginForm = props => {
    const [type, settype] = useState('password');
    const updateType = () => {
        if (type === "password" ){
            settype("text")
        }
        if (type === "text" ){
            settype("password")
        }
    }
  return (
    <Container>
      <Header>member login</Header>
      <ContainerInput>
        <ContainerUsername>
          <i className="fas fa-user"></i>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            autocomplete="off"
          />
        </ContainerUsername>
        <ContainerPassword>
          <Eye onClick={updateType}>
              {type === 'password' ? <i className="fas fa-eye-slash"></i>
            : <i className="fas fa-eye"></i>}
          </Eye>
          <i className="fas fa-lock"></i>
          <Input
            type={type}
            name="password"
            placeholder="Password"
            autocomplete="new-password"
          />
        </ContainerPassword>
      </ContainerInput>
      <Button>Login</Button>
      <ForgotPasswordContainer>
        <Text>Forgot Password?</Text>
        <a href="">Click Here</a>
      </ForgotPasswordContainer>
      <Line />
      <Register>Register</Register>
    </Container>
  );
};

export default LoginForm;
