import React from "react";

function StepOne({ userData, setUserData }) {
  return (
    <div className="StepOneContainer box-border w-3/5 mx-auto p-4 text-white rounded-xl bg-emerald-900 flex flex-col gap-6">
      <div className="nameDiv box-border text-xl p-1 flex justify-start items-center gap-12">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={userData.name}
          className="box-border w-full bg-zinc-200 text-black rounded outline-none px-4"
          onChange={(e) => {
            setUserData((userData) => {
              return {
                ...userData,
                name: e.target.value,
              };
            });
          }}
        />
      </div>

      <div className="emailDiv box-border text-xl p-1 flex justify-start items-center gap-12">
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={userData.email}
          className="box-border w-full bg-zinc-200 text-black rounded outline-none px-4"
          onChange={(e) => {
            setUserData((userData) => {
              return {
                ...userData,
                email: e.target.value,
              };
            });
          }}
        />
      </div>
    </div>
  );
}

export default StepOne;
