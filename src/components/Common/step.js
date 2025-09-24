import React, { Fragment } from "react";
import Card from "./card";
import Alert from "./alert";

const StepComponent = ({ steps }) => {
  return (
    <div id="steps" className="relative overflow-y-hidden overflow-x-auto  flex flex-col pt-4">
      {steps.map((item, index) =>
        <div key={index} className="flex items-start mb-4">
          <div className="flex items-center justify-center">
            <Card
              className={`flex relative z-3 pt-4 font- bg-[#fff] text-gray items-center justify-center w-8 h-8 rounded-[50%]`}
            >
              {item.step}
            </Card>
          </div>
          <div className="mr-4 pt-1 relative mb-2 w-full">
            <div className="stroke border-r z-[-1] absolute right-[-32px] top-[32px] border-[#0002] h-[100%] w-1" />
            <span>
              {item.content}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepComponent;
