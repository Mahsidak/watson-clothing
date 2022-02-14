import React from "react";
import FormItem from "../form-item/form-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utility";
import "./signin.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (err) {
      console.error(err.message);
    }
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Signin with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormItem
            name="email"
            label="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
            required
          />

          <FormItem
            name="password"
            label="password"
            onChange={this.handleChange}
            value={this.state.password}
            type="password"
            required
          />

          <div className="custom-buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <span className="or">OR</span>
            <CustomButton onClick={signInWithGoogle} isgoolesignedin="true">
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
