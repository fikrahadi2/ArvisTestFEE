import ClosableAlert from "./ClosableAlert";
import StatefulInput from "./StatefulInput";
//import { useAuth } from ".AuthContext";
import router from "next/router";
import React, {useState } from "react";
import { Button, Form } from "react-bootstrap";
import {LoginContainer, LoginH1,} from './LoginElements';
import {Database} from './Database';

function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState<RequestState>("none");
  const auth = useAuth();

  async function login() {
    e.preventDefault();
    try {
      setLoginState("loading");
      await auth.signin(email, password);
      setLoginState("success");
      router.push("/redirect");
    } catch (err) {
      setLoginState("error");
    }
  }

  function showError() {
    alert("Login gagal, periksa kembali email atau password");
    setLoginState("none");
  }

  return (
    <LoginContainer id="home">
        <LoginH1>Login</LoginH1>
        <Form className={styles.form} onSubmit={login}>
            {loginState == "loading" ? (
                <p className="text-danger">Loading...</p>
            ) : loginState == "success" ? (
            <ClosableAlert
                message="Telah berhasil login"
                title="Login Sukses!"
                variant="success"
            />
            ) : (
                loginState == "error" && showError()
            )}
            <StatefulInput
                type="email"
                inputClass={styles.input}
                name="Email"
                state={email}
                setState={setEmail}
                icon={<i className={`fas fa-envelope ${styles.icon}`}></i>}
            />
            <StatefulInput
                type="password"
                inputClass={styles.input}
                name="Password"
                state={password}
                setState={setPassword}
                icon={<i className={`fas fa-key ${styles.icon}`}></i>}
            />
            <Button variant="primary" type="submit" className={styles.submit}>
                Submit
            </Button>
        </Form>
    </LoginContainer>
    );
}

export default LoginLayout;
