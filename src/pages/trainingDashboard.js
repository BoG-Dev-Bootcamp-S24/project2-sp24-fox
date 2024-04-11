'use client'
import TrainingLogCard from "@/components/trainingLogCard";
import Sidebar from "@/components/sidebar";

import { useAppContext } from "@/context";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { Oswald } from "next/font/google";


const oswald = Oswald({ subsets: ["latin"] })

export default function trainingDashboard() {



    const { ready, red, logs, fullName, animals} = useAppContext()

    const router = useRouter();

    const [isLogs, setIsLogs] = useState(false);

    const [mylogs, setMyLogs] = useState([])

    useEffect(() => {
        async function displayLogs() {
            const arr = await Promise.all(logs.map(async(element) =>  {
                const id = element.animal;
                const response = await fetch("/api/animal?" + `id=${id}`);
                const result = await response.text();
               return <div><TrainingLogCard breed={JSON.parse(result).breed} hours={element.hours} description={element.description} date={element.date} title={element.title} name={JSON.parse(result).name} owner={fullName} /></div>
            }))
            setMyLogs(arr);
        } 

        displayLogs()
        
    }, [logs])

    function hello() {
        router.push("/")
    }

    return ( ready ? (!red ? (
        <main class="overflow-hidden">
            <div>
                <nav class="bg-white border-gray-300 shadow-md shadow-black-500/40">
                    <div class={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ${oswald.className}`}>
                        <a class="flex items-center space-x-1 rtl:space-x-reverse">
                            <img src="images/appLogo.png" class="h-8"/>
                            <span class="self-center text-2xl font-medium whitespace-nowrap dark:text-black">Progress</span>
                        </a>
                        <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <input type="text" id="simple-search" class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-2.5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800  focus:outline-none ">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </a> 
                    </div>
                </nav>
            </div>
            <div class="flex flex-row">
                <Sidebar currentPage={"training"}/>
                <div class="flex flex-col w-screen">
                    <div class="flex flex-row justify-between items-end w-full h-[70px]">
                        <p class="text-2xl mb-[10px] ml-[50px] text-gray-500 font-medium">
                            Training Logs
                        </p>
                        <div class="w-[150px] mr-[50px]">
                            <button onClick={() => {
                                if (animals.length !== 0) {
                                    router.push("/createTrainingLog")
                                } else {
                                    alert("Please create an animal profile!")
                                }
                                
                                
                                }} class=" w-[40px] h-[50px] mr-[200px]">
                                <div class="flex flex-row justify-center items-center w-[150px]">
                                    <img src="images/createNewLogo.png" class="h-5 pr-[5px]"></img>
                                    <p class="font-medium text-gray-500">
                                        Create New
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <hr className="bg-gray-300 w-full h-[2px]"></hr>
                    <div className="flex flex-col justify-start items-center min-w-fit ml-16 max-h-[50rem] min-h-[30rem] mt-[20px] overflow-y-auto">
                        {mylogs}
                    </div>
                </div>
            </div>
        </main>
    ) : hello() ): <div>loading...</div>);

}