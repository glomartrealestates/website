"use client";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";


export default function PhoneInputField() {
  const [value, setValue] = useState();
  return (
    <div className="h-[50px] bg-white px-2">
      {" "}
      <PhoneInput
        className="align-initial "
        international
        focusInputOnCountrySelection
        //  inputStyle={{ PhoneInput: { alignItems: "initial" } }}
        style={{
          height: "100%",
          width: "100%",
          outline: "none",
          border: "none",
          borderColor: "white",
          // border: "none",
          // focus: "none",
          // outlined: false,
          // display: "flex",
          // align_items: "initial",
          // alignitems: "initial",
        }}
        // placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />{" "}
    </div>
  );
}
