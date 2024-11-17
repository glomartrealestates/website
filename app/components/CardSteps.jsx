import React from 'react'

function CardSteps({ step }) {
  return (
    <div className="card-steps bg-slate-200 flex flex-col justify-between items-center p-4 rounded-md text-center">
      <div className="icon flex flex-col justify-center items-center w-16 h-16 rounded-full bg-white mb-4 text-text-color">
        <span className="text-lg font-bold">{step.id}</span>
        <span className="text-sm font-medium">Step</span>
      </div>

      <div className="title mb-2">
        <h1 className="text-xl font-medium">{step.title}</h1>
      </div>
      <div className="description text-gray-600 text-sm">
        {step.description}
      </div>
    </div>
  );
}

export default CardSteps;
