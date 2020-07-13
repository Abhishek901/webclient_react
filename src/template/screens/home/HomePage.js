import React from "react";
import { Link } from "react-router-dom";
import LoginPage from "../../components/login/Login";
import { ToastContainer, toast } from "react-toastify";
const HomePage = (props) => (
  <section className="header-wrap">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-xs-12 logo-wrap">
          <div className="main-login-wrap">
            <ToastContainer
              position="top-right"
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {/* Same as */}
            <LoginPage {...props}></LoginPage>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomePage;
