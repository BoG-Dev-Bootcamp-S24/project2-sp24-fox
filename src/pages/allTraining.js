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
    const [search, setSearch] = useState("")
    const [mylogs, setMyLogs] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await fetch("/api/admin/training")

            setMyLogs(JSON.parse(await response.text()))
        }

        getData()
        
    }, [])

    function hello() {
        router.push("/")
    }

    return ( ready ? (!red ? (
        <main class="overflow-x-hidden">
            <div>
            <nav class={`bg-white border-gray-300 shadow-md shadow-black-500/40 ${oswald.className}`}>
                <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a class="flex items-center space-x-1 rtl:space-x-reverse absolute top-4 left-6">
                    <img src="images/appLogo.png" class="h-8"/>
                    <span class="self-center text-3xl font-medium dark:text-black">Progress</span>
                </a>
                    <div class="flex justify-center ml-[25%] w-1/2">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input onChange={(e) => {
                                setSearch(e.target.value)
                            }} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required></input>
                        </div>
                    </div>
                </div>
            </nav>

            </div>
            <div class="flex flex-row">
                <Sidebar currentPage={"allTraining"}/>
                <div class="flex flex-col w-screen">
                    <div class="flex flex-row justify-between items-end w-full h-[70px]">
                        <p class="text-2xl mb-[10px] ml-[50px] text-gray-500 font-medium">
                            All Training Logs
                        </p>
                        <div class="w-[150px] mr-[50px]">
                        </div>
                    </div>
                    <hr className="bg-gray-300 w-full h-[2px]"></hr>
                    <div className="flex flex-col justify-start items-center min-w-fit ml-6 max-h-[42rem] min-h-[30rem] mt-[20px] overflow-y-auto">
                    {mylogs.length === 0 ? <div>There are no animal profiles</div> : mylogs.filter(element => {
                        return search === "" ? true : element.title.toLowerCase().match(search.toLowerCase());
                    }).map((element) => {
                        return <TrainingLogCard breed={element.breed} hours={element.hours} description={element.description} date={element.date} title={element.title} name={element.animal} owner={element.user} />
                       })}
                    </div>
                </div>
            </div>
        </main>
    ) : hello() ): <div>loading...</div>);

}