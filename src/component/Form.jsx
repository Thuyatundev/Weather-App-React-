import React, { useRef } from "react";

const Form = ({ fetchWeather }) => {
  const searchKey = useRef("");
  // console.log(searchKey);
  return (
    <div className="w-100 d-flex justify-content-center mt-4">
      <input
        type="text"
        ref={searchKey}
        className="form-control ms-5"
        placeholder="Enter Country Name ..."
      />
      <input
        type="button"
        onClick={() => fetchWeather(searchKey.current.value)}
        className="btn btn-danger text-white ms-2 me-5"
        value="search"
      />
    </div>
  );
};

export default Form;
