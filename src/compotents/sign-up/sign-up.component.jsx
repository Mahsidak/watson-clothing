import React from "react";
import "./sign-up.styles.scss";
import FormItem from "../form-item/form-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDoc } from "../../firebase/firebase.utility";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDoc(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
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
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h1 className="title">I do not have an account</h1>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormItem
            name="displayName"
            type="text"
            label="display name"
            value={displayName}
            onChange={this.handleChange}
            required
          />

          <FormItem
            name="email"
            type="email"
            label="email"
            value={email}
            onChange={this.handleChange}
            required
          />

          <FormItem
            name="password"
            type="password"
            label="password"
            value={password}
            onChange={this.handleChange}
            required
          />

          <FormItem
            name="confirmPassword"
            type="password"
            label="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            required
          />
          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
