import React from "react";

const forgetpassword = () => {
  return (
    <div className="w-100 h-100  d-flex flex-column justify-content-center align-items-center ">
      <div className="w-50">
        <div className="p-2 d-flex justify-content-center">
          <h2 className="text-primary"> Forget Password </h2>
        </div>
        <div className="d-sm-flex p-2 justify-content-center">
          <h4 className="pe-2"> Email : </h4>
          <div>
            <input type="email" className="text-wrap text-break rounded p-1" />
          </div>
        </div>

        <div className="d-flex p-2 mt-2 justify-content-center">
          <input
            type="submit"
            className="p-2 fs-6 fw-bold ps-5 pe-5 bg-primary rounded-pill border border-primary text-white shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default forgetpassword;
