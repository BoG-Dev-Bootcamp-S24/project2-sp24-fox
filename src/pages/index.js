import { Heebo, Inter, Oswald } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
export let userLoggedin = createContext(false)

const inter = Inter({ subsets: ["latin"] });
const heebo = Heebo({ subsets: ["latin"] })
const oswald = Oswald({ subsets: ["latin"] })

export default function Home({ verify }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [wrong, setWrong] = useState(false);
  
  
  
  const router = useRouter()

  const {setReady, setRed, red, ready} = useAppContext();

  async function verifyUser() {
    
    try {
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
  
  return ( ready ? red ? (

<main className="">
<nav className="bg-white border-gray-300 shadow-md shadow-black/25 mb-28">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a className="flex items-center space-x-1 rtl:space-x-reverse">
        <img src="images/appLogo.png" class="h-8"/>
        <span class={`self-center text-3xl font-semibold whitespace-nowrap text-black ${oswald.className}`}>Progress</span>
    </a>
  </div>
</nav>

<div class="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-2xl">
    <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
  </div>

  <div class={`mt-10 sm:mx-auto sm:w-full sm:max-w-md font-normal ${heebo.className}`}>
    <form id="myForm"class="space-y-6" onSubmit={(e) => {e.preventDefault; handleForm(e);  verifyUser()}}  method="POST">
      <div>
        <div class="mt-2 relative">
        <input required value={email} onInput={e => setEmail(e.target.value)} class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1 leading-tight" id="grid-email" type="email" placeholder="Email"></input>
        </div>
        <div className="inset-x-0 bottom-0 h-[2px] bg-red-500 rounded-b"></div>
      </div>

      <div>
        <div class="flex items-center justify-between">
        </div>
        <div class="mt-2">
          <input required value={password} onInput={e => setPassword(e.target.value)} class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1  leading-tight" id="grid-password" type="password" placeholder="Password"></input>
        </div>
        <div className="inset-x-0 bottom-0 h-[3px] bg-red-500 rounded-b"></div>
      </div>
  <br></br>
  
  <div>
        <div className="text-3xl text-center text-black">{wrong ? "Invalid Login" : ""}</div>
      </div>
  <div class="text-center relative">
      <button type="submit" className="text-white font-medium bg-red-600 hover:bg-red-800 w-full focus:outline-none text-2xl rounded-xl px-5 py-1.5 text-center ">
        Log in
      </button>
      </div>
    </form>


    
      <div class="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <p class="mt-5 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/signUp" class="font-bold leading-6 text-black hover:text-red-500" style={{marginLeft: 2.5 + 'px'}}> Sign up</a>
        </p>
      </div>

      <img src="images/quarterCircle.png" class="fixed bottom-0 left-0"/>

</div>

      </div>
    </main>
  ): hello() :<div>loading...</div>)
}
