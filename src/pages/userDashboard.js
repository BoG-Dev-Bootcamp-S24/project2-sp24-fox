import Sidebar from "@/components/sidebar";
import UserCard from "@/components/userCard";
import { useAppContext } from "@/context";
import { Oswald } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const oswald = Oswald({subsets: ["latin"]})

export default function userDashboard() {

    const {ready, red} = useAppContext()

    const [users, setUser] = useState([])
    const [search, setSearch] = useState("")
    const router = useRouter()

    useEffect(() => {
        async function getData() {
            const result = await fetch("/api/admin/users")

            setUser(JSON.parse(await result.text()))
        }

        getData()

    }, [])

    function hello() {
        router.push("/")
    }

    return (ready ? (!red ? (
        <main class="overflow-hidden text-black">
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
                            <input onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required></input>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            <div class="flex flex-row">
                <Sidebar currentPage={"userDash"}/>
                <div class="flex flex-col w-screen">
                    <div class="flex flex-row justify-between items-end w-full h-[70px]">
                        <p class="text-2xl mb-[10px] ml-[50px] text-gray-500 font-medium">
                            All Users
                        </p>
                    </div>
                    <hr className="bg-gray-300 w-full h-[2px]"></hr>
                    <div className="flex flex-row flex-wrap content-start justify-start items-start w-11/12 h-screen ml-[95px] mt-[20px]">
                       {users.filter((element) => {
                        return search === "" ? true : element.fullName.toLowerCase().match(search.toLowerCase())
                       }).map((element) => {
                        return <UserCard name={element.fullName} admin={element.admin}/>
                       })}
                    </div>
                </div>
            </div>
        </main>
    ) : hello() ): <div>loading...</div>);
}