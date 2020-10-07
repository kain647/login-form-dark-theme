import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 430px;
  width: 350px;
  background-color: #1e2c35;
  opacity: 80%;
`;
export const Header = styled.div`
  display: flex;
  margin: 20px 0 auto;
  text-transform: uppercase;
  color: #96a5a8;
  font-size: 1.3em;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 auto;
`;
export const Input = styled.input`
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
  height: 45px;
  width: 190px;
  padding-left: 60px;
  padding-right: 60px;
  border: none;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 270px;
  margin: 0 0 auto;
  cursor: pointer;
  text-transform: uppercase;
`;
export const ForgotPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 auto;
  a {
    color: #96a5a8;
  }
`;
export const Text = styled.div`
  display: flex;
  margin-right: 10px;
  color: #96a5a8;
`;
export const Register = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 270px;
  margin: 0 0 auto;
  cursor: pointer;
  text-transform: uppercase;
`;
export const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 auto;
  width: 90%;
  border-bottom: 1px solid gray;
`;
export const ContainerUsername = styled.div`
  display: flex;
  i {
    display: flex;
    font-size: 20px;
    position: absolute;
    top: 90px;
    left: 50px;
    color: #c7c8ca;
  }
`;
export const ContainerPassword = styled.div`
  display: flex;
  i {
    display: flex;
    font-size: 20px;
    position: absolute;
    top: 145px;
    left: 50px;
    color: #c7c8ca;
  }
`;
export const Eye = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  right: 100px;
  i{
    font-size: 10px;
    cursor: pointer;
  }
`
