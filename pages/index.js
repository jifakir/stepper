import { useState } from "react";
import StepItem from "../components/StepItem";


export default function Home() {
  const [index, setIndex] = useState(1);

  const nextHandler = () => {
    if(index >= 6) return;
    setIndex(index + 1);
  };
  const prevHandler = () => {
    if(index === 1) return setIndex(1);
    setIndex(index - 1);
  };
  console.log(index);
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-1/3 p-2 text-white">
        <div className="w-full pl-10 relative mb-12">
          <div className={`absolute w-8 h-8 left-0 mt-1 rounded-full border p-1 ${index === 1 ? 'border-blue-600' : 'border-gray-300'}`}>
            <div className={`w-full h-full text-center rounded-full flex justify-center items-center ${index === 1 ? ' bg-blue-500' : 'border-gray-200 bg-gray-200 text-gray-400'}`}>
              1
            </div>
          </div>
          <div className="w-full text-blue-600 text-sm">
              <h1 className="">Step 1</h1>
            <h3 className="">Profile</h3>
          </div>
          <div className={`absolute w-1 h-5 top-12 left-3 rounded-lg  ${index === 1 ? 'bg-blue-500' : 'bg-blue-200' }`}></div>
          <div className={`absolute w-1 h-1 -bottom-10 left-3 rounded-full  ${index === 1 ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
          <div className={`absolute w-1 h-1 -bottom-12 left-3 rounded-full   ${index === 1 ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
        </div>
        <div className="w-full relative pl-10 margin-top">
          <div className={`absolute w-8 h-8 left-0 mb-5 mt-1 flex rounded-full border p-1 ${ index === 2 ? 'border-blue-600' : 'border-gray-300'}`}>
            <div className={`w-full h-full text-center rounded-full flex justify-center items-center ${index === 2 ? 'bg-blue-600' : 'bg-gray-200 text-gray-400'}`}>
              2
            </div>
          </div>
          <div className="w-full text-blue-600 text-sm mb-5">
              <h1 className="">Step 2</h1>
              <h3 className="">Profile</h3>
          </div>
          {
            index >= 3 ? <StepItem title='Career Pathway' active={index === 3} /> : null
          }
          {
            index >= 4 ? <StepItem title='Dream Job' active={index === 4} /> : null
          }
          {
            index >= 5 ? <StepItem title='After Collaboration' active={index === 5} /> : null
          }
          {
            index >= 6 ? <StepItem title='Certification' active={index === 6} /> : null
          }

        </div>
        <div className="w-full mt-5 flex justify-between">
          <button onClick={prevHandler} className="bg-blue-500 px-5 py-2 rounded-lg focus:outline-none">Previous</button>
          <button onClick={nextHandler} className="bg-blue-500 px-5 py-2 rounded-lg focus:outline-none">Continue</button>
        </div>
      </div>
      <style jsx>{`
      
      .margin-top{
        margin-top: 60px;
      }
      `}</style>
    </div>
  )
};
