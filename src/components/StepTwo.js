import React from "react";

function StepTwo({ userSkills, setUserSkills }) {
  return (
    <div className="skillsContainer box-border w-10/12 pb-4 text-white mx-auto rounded-xl bg-cyan-700 flex flex-col gap-4">
      <p className="skills box-border mt-4 text-center text-2xl font-medium">
        Skills
      </p>
      <div className="skill box-border w-3/5 mx-auto text-2xl flex justify-start items-center gap-10">
        <input
          type="checkbox"
          className="box-border w-[15px] h-[18px] bg-red-500 rounded-3xl"
          onClick={() => {
            setUserSkills((userSkills) => {
              return [...userSkills, "HTML"];
            });
          }}
        />
        <p className="skillName box-border">HTML</p>
      </div>

      <div className="skill box-border w-3/5 mx-auto text-2xl flex justify-start items-center gap-10">
        <input
          type="checkbox"
          className="box-border w-[15px] h-[18px] bg-red-500 rounded-3xl"
          onClick={() => {
            setUserSkills((userSkills) => {
              return [...userSkills, "CSS"];
            });
          }}
        />
        <p className="skillName box-border">CSS</p>
      </div>

      <div className="skill box-border w-3/5 mx-auto text-2xl flex justify-start items-center gap-10">
        <input
          type="checkbox"
          className="box-border w-[15px] h-[18px] bg-red-500 rounded-3xl"
          onClick={() => {
            setUserSkills((userSkills) => {
              return [...userSkills, "Javascript"];
            });
          }}
        />
        <p className="skillName box-border">Javascript</p>
      </div>

      <div className="skill box-border w-3/5 mx-auto text-2xl flex justify-start items-center gap-10">
        <input
          type="checkbox"
          className="box-border w-[15px] h-[18px] bg-red-500 rounded-3xl"
          onClick={() => {
            setUserSkills((userSkills) => {
              return [...userSkills, "React"];
            });
          }}
        />
        <p className="skillName box-border">React</p>
      </div>
    </div>
  );
}

export default StepTwo;
