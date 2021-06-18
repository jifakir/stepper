import { useState } from "react";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full min-h-full flex justify-center items-center">
        <div className="border border-blue-500 p-5 m-2 rounded-md flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-5xl text-blue-500">Form</h1>
          <Link href='/form'><a className="py-10 text-blue-700 text-bold">Go to Form to see the form.</a></Link>
        </div>
        <div className="border border-blue-500 p-5 m-2 rounded-md flex flex-col justify-center items-center">
          <h1 className="w-full text-center text-5xl text-blue-500">Editorjs</h1>
          <Link href='/editor'><a className="py-10 text-blue-700 text-bold">Go to Form to see the form.</a></Link>
        </div>
      </div>
    </div>
  )
};
