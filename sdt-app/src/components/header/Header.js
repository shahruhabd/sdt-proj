import React, { useEffect, useState } from "react";
// import {Link} from 'react-router-dom'
import logo from "../../img/images/almau_logo.png";
import login from "../../img/icons/login.png";
import "../../styles/components/header.css";
import Popup from "reactjs-popup";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";

function Header() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      const username = data.user.displayName;
      localStorage.setItem("username", username);
      window.location.reload();
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__links">
        <a
          href="sdt-proj/src/components/header/Header#"
          className="link header__link"
        >
          Home
        </a>
        <a
          href='#tWeDo'
          className="link header__link"
        >
          Things we do
        </a>
        <a
          href="#uIni"
          className="link header__link"
        >
          Our Initiatives
        </a>
        <div className="header__buttons">
          <Popup
            trigger={
              <button className="button header__button">
                {" "}
                {value ? (
                  <>{localStorage.getItem("username")}</>
                ) : (
                  <>Log in <img src={login} alt="login" /></>
                )}{" "}
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header_modal">
                  {" "}
                  {value ? <>Log out</> : <h2>Log in</h2>}{" "}
                </div>
                <div className="content">
                  {" "}
                  {value ? (
                    <>Are you sure you want to log out?</>
                  ) : (
                    <h3>Log in with your Google account to continue</h3>
                  )}
                </div>
                <div className="actions">
                  <Popup
                    trigger={
                      <>
                        {value ? (
                          <button
                            onClick={logout}
                            className="button header__button"
                          >
                            Yes <img src={login} alt="login" />
                          </button>
                        ) : (
                          <button
                            className="login-with-google-btn"
                            onClick={handleClick}
                          >
                            Signin With Google
                          </button>
                        )}
                      </>
                    }
                    position="top center"
                    nested
                  >
                    <span>
                      {value ? (
                        <button
                          onClick={logout}
                          className="button header__button"
                        >
                          Logout <img src={login} alt="login" />
                        </button>
                      ) : (
                        <button
                          className="login-with-google-btn"
                          onClick={handleClick}
                        >
                          Signin With Google
                        </button>
                      )}
                    </span>
                  </Popup>
                  {value ? (
                    <button
                      className="button header__button close_btn"
                      onClick={() => {
                        console.log("modal closed ");
                        close();
                      }}
                    >
                      No
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            )}
          </Popup>
          {/* <button className='button header__button'>Login<img src={login} alt="login" /></button>
                <button className='button header__button'>Register<img src={login} alt="login" /></button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
