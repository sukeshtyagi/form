import React from "react";

function StepThree({ userData, userSkills }) {
  console.log(userData, userSkills);
  return (
    <div className="summaryDiv box-border w-4/5 mx-auto px-8 py-4 text-white text-xl bg-emerald-800 flex flex-col gap-4">
      <p className="summary box-border mb-2 text-center text-2xl font-bold">
        Summary
      </p>
      <div className="details box-border flex justify-start items-center gap-8">
        <p className="name">Name</p>
        <p className="nameValue ">{userData.name}</p>
      </div>

      <div className="details box-border flex justify-start items-center gap-8">
        <p className="name">Email</p>
        <p className="nameValue ">{userData.email}</p>
      </div>

      <div className="details box-border flex justify-start items-center gap-8">
        <p className="name">Skills</p>
        <p className="nameValue ">{userSkills.join(", ")}</p>
      </div>
    </div>
  );
}

export default StepThree;
