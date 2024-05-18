import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

function Parent() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);

  const [userData, setUserData] = useState({ name: "", email: "" });
  const [userSkills, setUserSkills] = useState([]);

  const handleNext = () => {
    if (step1) {
      setStep1(false);
      setStep2(true);
      setStep3(false);
      setStep4(false);
    }

    if (step2) {
      setStep1(false);
      setStep2(false);
      setStep3(true);
      setStep4(false);
    }

    if (step3) {
      setStep1(false);
      setStep2(false);
      setStep3(false);
      setStep4(true);
    }
  };

  const handlePrevious = () => {
    if (step2) {
      setStep1(true);
      setStep2(false);
      setStep3(false);
      setStep4(false);
    }

    if (step3) {
      setStep1(false);
      setStep2(true);
      setStep3(false);
      setStep4(false);
    }

    if (step4) {
      setStep1(false);
      setStep2(false);
      setStep3(true);
      setStep4(false);
    }
  };

  return (
    <div className="stepContainer box-border w-screen flex flex-col gap-12">
      <div className="stepsIndicator box-border w-4/5 mt-12 mx-auto p-2 text-2xl text-white font-medium rounded-xl bg-red-500 flex justify-evenly items-center ">
        <p
          className={`step box-border px-2 cursor-pointer bg-inherit ${
            step1
              ? "border border-2 rounded-lg bg-yellow-500 border-purple-900"
              : ""
          }`}
          onClick={() => {
            setStep1(true);
            setStep2(false);
            setStep3(false);
            setStep4(false);
          }}
        >
          Step1
        </p>
        <p
          className={`step box-border px-2 cursor-pointer bg-inherit ${
            step2
              ? "border border-2 rounded-lg bg-yellow-500 border-purple-900"
              : ""
          }`}
          onClick={() => {
            setStep1(false);
            setStep2(true);
            setStep3(false);
            setStep4(false);
          }}
        >
          Step2
        </p>
        <p
          className={`step box-border px-2 cursor-pointer bg-inherit ${
            step3
              ? "border border-2 rounded-lg bg-yellow-500 border-purple-900"
              : ""
          }`}
          onClick={() => {
            setStep1(false);
            setStep2(false);
            setStep3(true);
            setStep4(false);
          }}
        >
          Step3
        </p>
        <p
          className={`step box-border px-2 cursor-pointer bg-inherit ${
            step4
              ? "border border-2 rounded-lg bg-yellow-500 border-purple-900"
              : ""
          }`}
          onClick={() => {
            setStep1(false);
            setStep2(false);
            setStep3(false);
            setStep4(true);
          }}
        >
          Step4
        </p>
      </div>
      <div className="stepContainer box-border w-4/5 mx-auto">
        {step1 && <StepOne userData={userData} setUserData={setUserData} />}
        {step2 && (
          <StepTwo userSkills={userSkills} setUserSkills={setUserSkills} />
        )}
        {step3 && <StepThree userData={userData} userSkills={userSkills} />}
        {step4 && <StepFour userData={userData} userSkills={userSkills} />}
      </div>
      <div className="btnDiv box-border w-4/5 mx-auto p-2 text-lg text-white flex justify-between items-center">
        <button
          className={`previous box-border ${
            step1
              ? "invisible"
              : "px-4 py-1 bg-yellow-500 hover:border hover:border-2 hover:border-black hover:rounded-lg"
          }`}
          onClick={() => {
            handlePrevious();
          }}
        >
          Previous
        </button>
        <button
          className="next box-border px-4 py-1 bg-green-700 hover:border hover:border-2 hover:border-black hover:rounded-lg"
          onClick={() => {
            handleNext();
          }}
        >
          {step3 ? "Submit" : step4 ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Parent;
