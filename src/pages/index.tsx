import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import reactLogo from "../assets/react.svg";
import tauriLogo from "../assets/tauri.svg";
import nextLogo from "../assets/next.svg";
import honeycomb from "../assets/honeycomb.png";
import bee from "../assets/bee.png";

//link
import Link from 'next/link'

import {ArrowPathRoundedSquareIcon, AcademicCapIcon} from '@heroicons/react/24/solid'

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="inline-flex items-center mb-10">
        <Image src={honeycomb} height={60} width={60} alt={"honeycomb"} className="mr-2"></Image>
        <Image src={bee} alt={"bee"} className="ml-2 bee"></Image>
        <div className="text-4xl font-bold text-gray-900 ml-2">CombConvert</div>
      </div>
      <div className="flex flex-col">
        {/* link go to convert */}
        <Link href="/convert">
          <button className="p-3 rounded-lg max-w-xs inline-flex items-center hover:bg-gray-50">
            <div className="p-2 shadow-md rounded-lg mr-5">
              <ArrowPathRoundedSquareIcon className="w-8"/>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-gray-900">Convert a Video</div>
              <div className="text-gray-500">Convert your videos </div>
            </div>
          </button>
        </Link>
          <button className="p-3 rounded-lg max-w-xs inline-flex items-center hover:bg-gray-50">
            <div className="p-2 shadow-md rounded-lg mr-5">
              <AcademicCapIcon className="w-8"/>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-gray-900">About Us</div>
              <div className="text-gray-500">About CombConvert </div>
            </div>
          </button>
        </div>
        {/* Or drag and drop here text */}
        <p className="font-light text-gray-500">
          Or drag and drop video here
        </p>


    </div>
  );
}

export default App;
