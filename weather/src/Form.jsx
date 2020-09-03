import React, { useState } from "react";
import * as Yup from "yup";

function Form({ getWeatherByZip, getWeatherByName }) {
  const [input, setInput] = useState({ cityName: "", cityZip: "" });

  const handleChanges = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    getWeatherByName(input.cityName);
  };

  const handleSubmitZip = (e) => {
    e.preventDefault();
    getWeatherByZip(input.cityZip);
  };
  return (
    <div>
      <form onSubmit={handleSubmitName}>
        <input
          name="cityName"
          type="text"
          placeholder="Enter City Name"
          value={input.cityName}
          onChange={handleChanges}
        ></input>

        <input type="submit" />
      </form>
      <form onSubmit={handleSubmitZip}>
        <input
          name="cityZip"
          type="text"
          placeholder="Enter City Zipcode"
          value={input.cityZip}
          onChange={handleChanges}
        ></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
