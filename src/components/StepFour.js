import React from "react";

function StepFour({ userData, userSkills }) {
  console.log(userData, userSkills);
  localStorage.setItem("userData", JSON.stringify(userData));
  localStorage.setItem("userSkils", userSkills);
  return (
    <div className="messageContainer box-border w-full bg-pink-700 text-white text-2xl rounded-xl">
      <p className="message box-border text-center  p-4">
        Please verify the details and click Done to complete the signup process
      </p>
    </div>
  );
}

export default StepFour;
