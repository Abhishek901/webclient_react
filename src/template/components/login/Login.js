import React, { Component } from "react";
import DatePicker from "react-date-picker";
import "./login.css";
import dataLayer from "../../../data-laye";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import dataLaye from "../../../data-laye";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OtpInput from "react-otp-input";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      otp: "",
      isMatched: false,
      showOtp: false,
    };
    this.dataLayer = dataLayer;
  }
  // onChangeOne = (event) => {
  //   console.log(event);
  //   this.setState((data) => {
  //     return {
  //       dateOne: event,
  //     };
  //   });
  // };

  // onChangeTwo = (event) => {
  //   console.log(event);
  //   this.setState((data) => {
  //     return {
  //       dateTwo: event,
  //     };
  //   });
  // };
  logIn = async () => {
    console.log(this.state.otp);
    toast.info("Sending OTP...", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const phoneNumber = this.state.phoneNumber.slice(
      3,
      this.state.phoneNumber - 1
    );
    // console.log(phoneNumber);
    const data = JSON.stringify({
      phoneNumber: phoneNumber,
    });
    try {
      const results = await dataLaye.login(data);
      this.setState({ showOtp: true });
      toast.success("OTP sended successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(results);
    } catch (err) {
      console.log("here in error");
      console.log(err);
      toast.error("Unable to send OTP please try Again later...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  getOtp = async () => {
    const phoneNumber = this.state.phoneNumber.slice(
      3,
      this.state.phoneNumber - 1
    );
    const data = JSON.stringify({
      phoneNumber: phoneNumber,
      otp: this.state.otp,
    });
    //console.log(data);
    try {
      const results = await dataLaye.verify(data);
      //console.log("here in results");
      console.log(results);
      localStorage.setItem("token", results.tokens[0]);
      localStorage.setItem("reffreshToken", results.tokens[1]);
      window.localStorage.setItem("tokenExpiration", results.expiresIn);
      this.props.history.push("/dashboard");
    } catch (err) {
      console.log("here in error");
      console.log(err);
      toast.error("OTP NOT MATCHED", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  setOtp = async (otp) => {
    await this.setState({ otp });
  };
  resendOtp = () => {
    this.setState({ showOtp: false });
  };
  setValue = async (event) => {
    const value = event;
    // console.log(value);
    if (event) {
      this.setState(() => {
        return {
          phoneNumber: value,
        };
      });
    }
    // this.setState(() => ({
    //   phoneNumber: event.target.value,
    // }));
  };
  render() {
    let component = {};
    let logInButton = {};
    if (this.state.showOtp) {
      component = (
        <>
          <p>ENTER THE OTP HERE</p>
          <OtpInput
            onChange={this.setOtp}
            numInputs={4}
            containerStyle="input_container"
            inputStyle="otp_inputstyle"
            value={this.state.otp}
            separator={<span>-</span>}
          />
          <button type="button" onClick={this.getOtp} className="btn">
            Submit OTP
          </button>
          <button type="button" onClick={this.resendOtp} className="btn">
            Resend OTP
          </button>
        </>
      );
    } else {
      component = (
        <>
          <p>ENTER THE MOBILE NUMBER</p>
          <PhoneInput
            placeholder="Enter phone number"
            value={this.state.phoneNumber}
            onChange={this.setValue}
            max="10"
          />
          <button type="button" onClick={this.logIn} className="btn">
            Login
          </button>
        </>
      );
    }
    return (
      <div className="login-content">
        <img src="./src/images/logo.jpg" alt="" className="img-responsive" />
        {component}
      </div>
    );
  }
}

export default Login;
