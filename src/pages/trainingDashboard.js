import Sidebar from "@/components/sidebar";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";



export default function trainingDashboard() {

    // const session = await getSession();


    const router = useRouter();
    
    const [fullName, setFullName] = useState("");
    
    

    useEffect(() => {

        async function getData() {
            try {
                const response = await fetch("http://localhost:3000/api/user/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
    
                credentials: "include"
                
            });
    
            const data = await response.text()
            if (data === "Failure") {
                router.push("/");
            } else {
                setFullName(JSON.parse(data).fullName)
            }
            
            } catch (error) {
                console.error(error)
            }
            
        }

        getData()
    }, [])
    

    return (
        <main class="overflow-hidden text-black">
            <nav class="bg-white border-gray-300 shadow-md shadow-red-500/40">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a class="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="images/appLogo.png" class="h-8"/>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Progress</span>
                    </a>
                    <a class="flex items-center space-x-3 rtl:space-x-reverse">
                    <input type="text" id="simple-search" class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2.5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                        <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                    </a> 

                </div>
            </nav>
            <Sidebar fullName={fullName}/>
            <div class="h-16 border-l border-gray-400"></div>
        </main>
    
    );
}