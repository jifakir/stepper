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
    <div className="w-full min-h-screen flex items-center">
      <div className="w-1/3 min-h-full">
        <div className="p-2 text-white">
          <div className="w-full pl-10 relative mb-12 transition-colors duration-300">
            <div className={`absolute transition-colors duration-300 w-8 h-8 left-0 mt-1 rounded-full border p-1 ${index === 1 ? 'border-blue-600' : 'border-gray-300'}`}>
              <div className={`w-full transition-colors duration-300 h-full text-center rounded-full flex justify-center items-center ${index === 1 ? ' bg-blue-500' : 'border-gray-200 bg-gray-200 text-gray-400'}`}>
                1
              </div>
            </div>
            <div className="w-full text-blue-600 text-sm transition-colors duration-300">
                <h1 className="">Step 1</h1>
                <h3 className="">Profile</h3>
            </div>
            <div className={`absolute transition-colors duration-500 w-1 h-5 top-12 left-3 rounded-lg  ${index === 1 ? 'bg-blue-500' : 'bg-gray-300' }`}></div>
            <div className={`absolute transition-colors duration-500 w-1 h-1 -bottom-10 left-3 rounded-full  ${index === 1 ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
            <div className={`absolute transition-colors duration-500 w-1 h-1 -bottom-12 left-3 rounded-full   ${index === 1 ? 'bg-blue-400' : 'bg-gray-300'}`}></div>
          </div>
          <div className="w-full relative pl-10 margin-top">
            <div className={`absolute transition-colors duration-500 w-8 h-8 left-0 mb-5 mt-1 flex rounded-full border p-1 ${ index === 2 ? 'border-blue-600' : 'border-gray-300'}`}>
              <div className={`w-full transition-colors duration-500 h-full text-center rounded-full flex justify-center items-center ${index === 2 ? 'bg-blue-600' : 'bg-gray-200 text-gray-400'}`}>
                2
              </div>
            </div>
            <div className="relative w-full text-blue-600 text-sm mb-5">
                <h1 className="">Step 2</h1>
                <h3 className="">Profile</h3>
                <div className={`dot absolute bg-blue-500 rounded-full ${index > 2 ? 'block' : 'hidden'}`}></div>
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
        </div>
        
      </div>
        <div className="w-2/3 h-10 m-5 flex justify-between text-white">
          <button onClick={prevHandler} className={`bg-blue-500 px-5 py-2 rounded-lg focus:outline-none ${index <= 1 ? 'invisible' : 'visible'}`}>Previous</button>
          <button onClick={nextHandler} className="bg-blue-500 px-5 py-2 rounded-lg focus:outline-none">{index === 6 ? 'Submit' : 'Continue'}</button>
        </div>
      <style jsx>{`
      
      .margin-top{
        margin-top: 60px;
      }
      .dot{
        width: 5px;
        height: 5px;
        left: 6.4px;
      }
      `}</style>
    </div>
  )
};
