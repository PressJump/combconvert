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

import {ArrowPathRoundedSquareIcon, AcademicCapIcon, ArrowUpTrayIcon} from '@heroicons/react/24/solid'

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
        <div className="ml-2">
          <div className="text-4xl font-bold text-gray-900">CombConvert</div>
          <div className="text-gray-500">A modern and simple video converter</div>
        </div>
      </div>
      <div className="flex flex-row">
        {/* link go to convert */}

          <label className="p-3 rounded-lg max-w-xs inline-flex items-center hover:bg-gray-50 cursor-pointer">
            <div className="p-2 shadow-md rounded-lg mr-5">
              <ArrowUpTrayIcon className="w-8"/>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-gray-900">Convert a Video</div>
              <div className="text-gray-500">Convert your videos </div>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>

        <Link href="/about">
          <button className="p-3 rounded-lg max-w-xs inline-flex items-center hover:bg-gray-50">
            <div className="p-2 shadow-md rounded-lg mr-5">
              <AcademicCapIcon className="w-8"/>
            </div>
            <div className="text-left">
              <div className="text-xl font-bold text-gray-900">About Us</div>
              <div className="text-gray-500">About CombConvert </div>
            </div>
          </button>
        </Link>
        </div>
          <div className="flex items-center justify-center w-full max-w-lg">
              <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Video Files</p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div> 
    </div>
  );
}

export default App;
