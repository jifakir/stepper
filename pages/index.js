import { useState } from "react";
import Link from 'next/link';

export default function Home() {

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-full min-h-full flex flex-col justify-center items-center">
        <h1 className="w-full text-center text-5xl">This is a form with stepper</h1>
        <Link href='/form'><a className="py-10 text-blue-700 text-bold">Go to Form to see the form.</a></Link>
      </div>
    </div>
  )
};
