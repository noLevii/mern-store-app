import { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.oportunidadesyproductos.com/wp-content/uploads/2018/01/Ofertas-en-Dalion-Store.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    register(dispatch, { username, email, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREAR UNA CUENTA</Title>
        <Form>
          <Input
            placeholder="nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="correo electronico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="contraseña"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Agreement>
            Al crear una cuenta estoy de acuerdo con la{" "}
            <b>POLITICA DE PRIVACIDAD</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREAR
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
