// Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// Importação do Hook form pra validar e enviar o formulário
import { useForm } from "react-hook-form";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useVerificaLogin } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Login = () => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout()
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { verificaLogin } = useVerificaLogin();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados:", data);

    const respostaVerificacao = verificaLogin(data);

    if (respostaVerificacao == "Login efetuado com sucesso") {
      alert(respostaVerificacao);
      navigate("/home");
    } else {
      setAlertClass("mb-5 mt-2");
      setAlertMensagem(respostaVerificacao);
    }
  };

  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  const [alertClass, setAlertClass] = useState("mb-5 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");

  return (
    <div>
      <Container
        style={{ height: "92vh" }}
        className="justify-content-center align-content-center"
      >
        <BsBoxArrowInRight
          style={{
            fontSize: "300px",
            color: "green",
            margin: "auto",
            width: "100%",
          }}
        />
        <Form
          style={{ width: "75%", margin: "auto", textAlign: "center" }}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* Caixinha de email */}
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-5"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: "Email inválido",
                },
                validate: (value) => value.includes("@") || "Email inválido",
              })}
            ></Form.Control>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </FloatingLabel>
          {/* Caixinha de senha */}
          <FloatingLabel
            controlId="floatingInputPassword"
            label="Senha"
            className="mb-5"
          >
            <Form.Control
              type="password"
              placeholder="Senha"
              {...register("senha", {
                required: "A senha é obrigatória",
              })}
            ></Form.Control>
            {errors.senha && <p className="error">{errors.senha.message}</p>}
          </FloatingLabel>
          {/* Botao para envio do formulario */}
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>
          {/* Alerta caso haja erro */}
          <Alert
            variant="danger"
            className={alertClass}
            style={{
              position: "absolute",
              width: "30%",
              left: "35%",
              top: "90%",
            }}
          >
            {alertMensagem}
          </Alert>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
