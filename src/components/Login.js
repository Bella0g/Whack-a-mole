import React from "react";
import { useState } from "react";
import moleImage from "../assets/mole-cartoon.png";

/**
 *  Login component receiving user input
 *
 * @component
 * @param {Object} props - component props
 * @param {function} props.handleLogin - function executed when user clicks play button
 * @param {function} props.onNameSubmitted - function executed when username is submitted
 * @returns {React.ReactElement} - username input field and button going to gamepage
 */
function Login({ handleLogin, onNameSubmitted }) {
  // store user input
  const [userName, setUserName] = useState("");
  // store user input when submitted
  const [submittedName, setSubmittedName] = useState("");
  // button state
  const [isDisabled, setIsDisabled] = useState(true);

  // function to store username input
  const handleChange = (e) => {
    // store input changes
    setUserName(e.target.value);
    // set button state
    setIsDisabled(false);
  };

  // function to store entire username input
  const handleSubmit = (e) => {
    // prevent submitting form
    e.preventDefault();
    // store entire input
    setSubmittedName(userName);
    // call handleLogin function
    handleLogin(true);
    // call onNameSubmitted function
    onNameSubmitted(userName);
  };

  return (
    <>
      <div className="absolute inset-0 z-0"></div>
      <div className="px-3 py-5 my-5 relative rounded-xl shadow-lg drop-shadow-2xl bg-slate-800 border border-slate-400/80">
        <div className="p-5 flex flex-col">
          <div className="max-w-64">
            <img src={moleImage} alt="mole" />
          </div>
          {/* if no name is submitted */}
          {!submittedName ? (
            <>
              <form
                className="flex flex-col text-left my-5"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col my-2">
                  <div className="relative">
                    <input
                      id="floating_outlined"
                      type="text"
                      value={userName ?? ""}
                      onChange={handleChange}
                      className="block px-3 p-2 w-full text-sm text-slate-200 bg-slate-700 rounded-lg appearance-none  focus:bg-slate-700/25 focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm px-1 text-slate-200 duration-300 transform -translate-y-2 scale-85 top-1 z-11 origin-[0] peer-focus:text-slate-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0.5 peer-focus:scale-85 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto start-1"
                    >
                      Enter name
                    </label>
                  </div>
                </div>

                <div className="flex w-full text-center">
                  <button
                    type="submit"
                    className={`w-full justify-center flex px-2 my-2 rounded-md py-1 text-slate-50 bg-purple-600 outline outline-1 outline-offset-2 outline-cyan-400 shadow-lg hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300
                    ${
                      isDisabled
                        ? "bg-gray-700 cursor-not-allowed opacity-50"
                        : "hover:bg-purple-700 transition ease-in-out delay-150 hover:-translate-1 hover:scale-105 duration-300"
                    }`}
                    disabled={isDisabled}
                  >
                    Play!
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
