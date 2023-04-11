import React from "react";

const login = () => {
  return (
    <div className="w-100 h-100  d-flex flex-column justify-content-center align-items-center ">
      <div className="w-50">
        <div className="p-2 d-flex justify-content-center">
          <h2 className="text-primary"> Login </h2>
        </div>
        <div className="d-sm-flex p-2 justify-content-center">
          <h4 className="pe-2"> Username : </h4>
          <div>
            <input className="text-wrap text-break rounded p-1" type="text" />
          </div>
        </div>
        <div className="d-sm-flex p-2 justify-content-center">
          <h4 className="pe-2"> Password : </h4>
          <div>
            <input
              className="text-wrap text-break rounded p-1"
              type="password"
            />
            <p className="text-primary d-flex justify-content-end mt-1">
              {" "}
              Forget Password ?{" "}
            </p>
          </div>
        </div>

        <div className="d-flex p-2 mt-1 justify-content-center">
          <input
            type="submit"
            className="p-2 fs-6 fw-bold ps-5 pe-5 bg-primary rounded-pill border border-primary text-white shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default login;
