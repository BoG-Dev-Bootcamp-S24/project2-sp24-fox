import TrainingLogCard from "@/components/trainingLogCard";
      'use client'
import Sidebar from "@/components/sidebar";

import { useAppContext } from "@/context";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";




export default function trainingDashboard() {



    const { fullName, id, ready, red } = useAppContext()

    const router = useRouter();
  
    const [leave, setLeave] = useState(false)


    
   
    // useEffect(() => {

    //     async function getData() {
    //         //         try {
    //         //             const response = await fetch("http://localhost:3000/api/user/verify", {
    //         //             method: "POST",
    //         //             headers: {
    //         //                 "Content-Type": "application/json"
    //         //             },
            
    //         //             credentials: "include"
                        
    //         //         });
            
    //         //         const data = await response.text()
    //         //         if (data === "Failure") {
    //         //             router.push("/");
    //         //         } else {
    //         //             setFullName(JSON.parse(data).fullName)
    //         //         }
                    
    //         //         } catch (error) {
    //         //             console.error(error)
    //         //         }
    //         console.log(id)
    //         console.log(fullName)
    //         if (id === "") {
    //             setLeave(true)
    //         } else {
    //             setLeave(false)
    //         }
    //     }

    //     getData()
        
        
        
    // }, [fullName, id])
    
    function hello() {
        router.push("/")
    }

export default function trainingDashboard() {
    return ( ready ? (!red ? (
        <main class="overflow-hidden">
            <div>
                <nav class="bg-white border-gray-300 shadow-md shadow-red-500/40">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="images/appLogo.png" class="h-8"/>
                            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Progress</span>
                        </a>
                        <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <input type="text" id="simple-search" class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                <Sidebar/>
                <div class="flex flex-col w-screen">
                    <div class="flex flex-row justify-between items-end w-full h-[70px]">
                        <p class="text-2xl mb-[10px] ml-[50px] text-gray-500 font-medium">
                            Training Logs
                        </p>
                        <div class="w-[150px] mr-[50px]">
                            <button class=" w-[40px] h-[50px] mr-[200px]">
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
                    <div className="flex flex-col justify-start items-center w-10/12 h-screen ml-[100px] mt-[20px]">
                        <TrainingLogCard/>
                    </div>
                </div>
            </div>
        </main>
    ) : hello() ): <div>loading...</div>);

}