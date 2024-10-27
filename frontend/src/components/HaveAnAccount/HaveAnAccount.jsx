import React from "react";
import "./style.css";

export const HaveAnAccount = ({ className }) => {
  return (
    <div className={`have-an-account ${className}`}>
      <p className="already-have-an">
        <span className="text-wrapper">Already have an ccount?</span>

        <span className="span">&nbsp;</span>

        <span className="text-wrapper-2">Log in&nbsp;&nbsp;</span>
      </p>
    </div>
  );
};