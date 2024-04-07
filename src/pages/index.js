
import Image from "next/image";
import { Inter } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";
import { useAppContext } from "@/context";
export let userLoggedin = createContext(false)

const inter = Inter({ subsets: ["latin"] });


export default function Home({ verify }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);

  
  
  const router = useRouter()

  const {setReady, setRed, red, ready} = useAppContext();

  // console.log(id)

  async function verifyUser() {
    
    try {
      console.log(email)
      const response = await fetch("http://localhost:3000/api/user/verify", {
       method: "POST",
      headers: {
        "Content-Type": "application/json",

        
      },
      body: JSON.stringify({email, password}),
      credentials: "include"
    })
      
        const data = JSON.parse(await response.text());
          if (data.id) {
            setReady(true)
            setRed(false)
            router.refresh();         
          } 
      
    } catch (error) {
      setWrong(true)
      console.log(error)
      alert("Invalid login")
      console.error();
      
    }
  }

  function handleForm(event) { event.preventDefault(); } 
  
  
  function hello() {
    router.push("/trainingDashboard")
  }
  
  // useEffect(() => {
  //   console.log(email)
  //   console.log(password)
  // }, [email, password])
  return ( ready ? red ? (

<main className="">
<nav className="bg-white border-gray-300 shadow-md shadow-red-500/40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="images/appLogo.png" class="h-8"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Progress</span>
    </a>
  </div>
</nav>
<br></br><br></br><br></br>

<div class="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Log In to your Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form id="myForm"class="space-y-6" onSubmit={(e) => {e.preventDefault; handleForm(e);  verifyUser()}}  method="POST">
      <div>
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
        <input required value={email} onInput={e => setEmail(e.target.value)} class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="Email Address"></input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-md font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input required value={password} onInput={e => setPassword(e.target.value)} class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="password" placeholder="Password"></input>
        </div>
      </div>
  <br></br>
  
  <div>
        <div className="text-3xl text-center text-black">{wrong ? "Invalid Login" : ""}</div>
      </div>
  <div class="text-center">
      <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Login
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
      </div>
    </form>


    
      <div class="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <p class="mt-5 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/signUp" class="font-semibold leading-6 text-red-600 hover:text-red-500" style={{marginLeft: 2.5 + 'px'}}>Create an Account Now</a>
        </p>
      </div>

      <img src="images/quarterCircle.png" class="fixed bottom-0 left-0"/>

</div>

      </div>
    </main>
  ): hello() :<div>loading...</div>)
}
