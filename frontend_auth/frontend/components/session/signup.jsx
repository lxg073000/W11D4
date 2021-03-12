import React from "react";

class SignUp extends React.Conponent {
  constructor(props) {
    super(props);

    this.state = {
      userField: "",
      emailField: "",
      passwordField: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createNewUser(this.state)
      .then(() => this.props.history.push("/chirps"));
  }

  render() {
    return (
      <div className="session-form">
        <h1>Sign Up</h1>
        <form>
          <label>
            Username:
            <input
              type="text"
              value={this.state.userField}
              onChange={this.handleInput("userField")}
            >
              {this.state.userField}
            </input>
          </label>

          <label>
            Email:
            <input
              type="text"
              value={this.state.emailField}
              onChange={this.handleInput("emailField")}
            >
              {this.state.userField}
            </input>
          </label>

          <label>
            Password:
            <input
              type="password"
              value={this.state.passwordField}
              onChange={this.handleInput("passwordField")}
            >
              {this.state.userField}
            </input>
          </label>

          <submit value="Sign Up" onSubmit={this.handleSubmit}></submit>
        </form>
      </div>
    );
  }
}

export default SignUp;
