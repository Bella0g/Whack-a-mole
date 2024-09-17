import React from "react";
import { useState } from "react";
import moleImage from "../assets/mole-cartoon.png";

function Login({ handleLogin, onNameSubmitted }) {
  // store user input
  const [userName, setUserName] = useState("");
  // store user input when submitted
  const [submittedName, setSubmittedName] = useState("");
  // button state
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e) => {
    setUserName(e.target.value);
    setIsDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(userName);
    handleLogin(true);
    onNameSubmitted(userName);
  };

  return (
    <>
      <div className="absolute inset-0 z-0"></div>
      <div className="px-3 py-5 my-5 relative rounded-xl shadow-lg drop-shadow-2xl bg-slate-800">
        <div className="p-5 flex flex-col bg-slate-900 rounded-md border border-slate-700">
          <div className="max-w-64">
            <img src={moleImage} alt="mole" />
          </div>
          {!submittedName ? (
            <>
              <h3 className="text-slate-50 text-lg font-bold tracking-wide">
                LOGIN
              </h3>
              <form
                className="flex flex-col text-left my-5"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col my-2">
                  <div class="relative">
                    <input
                      id="floating_outlined"
                      type="text"
                      value={userName ?? ""}
                      onChange={handleChange}
                      className="block px-3 p-2 w-full text-sm text-slate-200 bg-slate-700/50 rounded-lg border-1 border-gray-300 appearance-none  focus:bg-slate-700/25 focus:outline-none focus:ring-0 peer focus:outline-b-2"
                      placeholder=" "
                    />
                    <label
                      for="floating_outlined"
                      class="absolute text-sm px-1 text-slate-200 duration-300 transform -translate-y-2 scale-85 top-1 z-11 origin-[0] peer-focus:text-slate-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0.5 peer-focus:scale-85 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
                    >
                      Username
                    </label>
                  </div>
                </div>

                <div className="flex w-full text-center">
                  <button
                    type="submit"
                    className={`w-full justify-center flex px-2 my-2 rounded-md py-1 text-slate-50 bg-purple-600 outline outline-1 outline-offset-2 outline-teal-300 shadow-lg hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300
                    ${
                      isDisabled
                        ? "bg-gray-700 cursor-not-allowed opacity-50"
                        : "hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300"
                    }`}
                    disabled={isDisabled}
                  >
                    Login
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
