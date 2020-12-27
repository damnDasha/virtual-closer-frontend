import React, { Component } from "react";
import { Section } from "../Utils/Utils";
import { Link } from "react-router-dom";
import { Button, Input } from "../Utils/Utils";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/main";
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h3>Log In</h3>

        <form onSubmit={this.handleSubmitJwtAuth}>
          <fieldset id="logging">
            <label htmlFor="username">Username: </label>
            <Input
              name="user_name"
              id="LoginForm__user_name"
              placeholder="james.bond"
              required
            ></Input>
            <br />
            <br />
            <label htmlFor="password">Password: </label>
            <Input
              type="password"
              name="password"
              id="LoginForm__password"
              placeholder="********"
              required
            ></Input>
          </fieldset>
          <br />
          <Button id="login" type="submit">
            Login
          </Button>{" "}
          <br />
          <Link id="register" to={"/register"}>
            <button type="button">New member sign-up</button>
          </Link>
          <Link id="cancel" to={"/"}>
            <button type="button">Cancel</button>
          </Link>
        </form>
        {/* <LoginForm onLoginSuccess={this.handleLoginSuccess} /> */}
      </Section>
    );
  }
}
