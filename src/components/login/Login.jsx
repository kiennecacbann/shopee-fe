import React from "react";
import Footer from "../footer/Footer";
import images from "../../constants/images";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="bg-white">
        <nav className="flex justify-between items-center mx-[150px] py-3">
          <div className="mr-10 flex items-center space-x-4">
            <Link>
              <img className="w-[120px] h-16" src={images.logo_login} />
            </Link>
            <span className="font-normal text-[24px]">Log In</span>
          </div>
          <div>
            <Link>
              <span className="text-[14px] font-sans text-[#ee4d2d]">
                Need Help?
              </span>
            </Link>
          </div>
        </nav>
        <div className="bg-[#FFEBE2]">
          <div className="login-section">
            <div>
              <form className=" login-form ">
                <div className="mx-7">
                  <div className="flex mt-6 justify-between items-center">
                    <div className="text-[20px]">
                      <span>Log In</span>
                    </div>
                    <div className="flex justify-between space-x-2">
                      <div className="bg-[#fffbec] border-[#ffbf00] text-[#ffbf00] border-[2px] items-center justify-center p-2 font-semibold border-solid text-[14px]">
                        <span>Log in with QR</span>
                      </div>
                      <div>
                        <Link>
                          <img className="h-11 w-11" src={images.qr} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-7">
                    <input
                      type=""
                      className="login-input"
                      placeholder="Phone number / Username / Email"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="login-input"
                    />
                    <button
                      type="submit"
                      className="login-button"
                    >
                      LOG IN
                    </button>
                  </div>
                  <div className="flex justify-between items-center text-[12px] text-[#0055AA] my-2">
                    <div>
                      <Link>
                        <span>Forgot Password</span>
                      </Link>
                    </div>
                    <div>
                      <Link>
                        <span>Log In with Phone Number</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="h-[1px] w-full bg-[#dbdbdb] flex-1"></div>
                      <span className="text-[#dbdbdb] text-[13px] mx-4">
                        OR
                      </span>
                      <div className="h-[1px] w-full bg-[#dbdbdb] flex-1"></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="">
                        <button className="px-7  login-social-button">
                          <img className="h-10 w-10" src={images.logofb} />
                          Facebook
                        </button>
                      </div>
                      <div className="">
                        <button className="px-9 py-1 login-social-button">
                          <img className="h-8 w-8" src={images.logogg} />
                          Google
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="items-center flex justify-center mt-8">
                    <div className="text-[14px]">
                      <span className="text-[#00000042]">New to Shopee? </span>
                      <Link>
                        <span className="text-[#ee4d2d] font-medium">Sign Up</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
