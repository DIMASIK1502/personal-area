import React, { Component } from "react";
import { Button, Input, Checkbox, Loader } from "rsuite";

import "./Login.scss";

const Logo = require("../img/logo2.png");

export class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="row">
          <div className="col-6 d-flex  align-items-center">
            <div className="login-form">
              <Input
                size="lg"
                className="form-input"
                placeholder="Введите логин или почту"
              ></Input>
              <Input
                type="password"
                size="lg"
                className="form-input"
                placeholder="Введите пароль"
              ></Input>
              <Checkbox size="lg">Запомнить</Checkbox>
              <Button size="lg" className="login-btn" appearance="primary">
                Войти
              </Button>
              <Button size="lg">Регистрация</Button>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div>
              <img className="img-fluid" src={Logo}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
