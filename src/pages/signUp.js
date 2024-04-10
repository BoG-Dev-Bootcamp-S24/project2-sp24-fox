import Image from "next/image";
import { Inter, Oswald } from "next/font/google";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
export let userSignup = createContext(false);
const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] })

export default function Home() {

  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [admin, setAdmin] = useState(false)



  
  const router = useRouter();

  const {setFullName, setId, setReady, setRed} = useAppContext()

  async function registerUser() {
    try {
      if (password === confPassword) {
        const namemail = `fullName=${fullName}&email=${email}&password=${password}&admin=${admin}`
        const response = await fetch(`http://localhost:3000/api/user?${namemail}`, {
          method: "POST"
        });
        
        if (await response.text() === "Success") {
          alert("Success! You can now login")
          router.refresh()
          window.location.href = "/"
          
        }

      } else {
        alert("Passwords do not match")
      }
    } catch (error) {
      console.log(error)
      alert("Invalid login");
      console.error();
      
    }
  }

  function handleForm(event) { event.preventDefault(); } 

  return (

<main class="">
<nav class={`bg-white border-gray-300 shadow-md shadow-black-500/40 text-black ${oswald.className}`}>
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-1 rtl:space-x-reverse">
        <img src="images/appLogo.png" class="h-8"/>
        <span class="self-center text-3xl font-semibold whitespace-nowrap">Progress</span>
    </a>
  </div>
</nav>


<div class="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Create Account</h2>
  </div>

  <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" onSubmit={(e) => {e.preventDefault; handleForm(e); registerUser()}} method="POST">
      <div> 
        <div class="mt-2 relative">
        <input value={fullName} onInput={e => setfullName(e.target.value)} required id="fullName" class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1 leading-tight" type="text" placeholder="Full Name"></input>
        </div>
        <div className="inset-x-0 bottom-0 h-[2px] bg-red-500 rounded-b"></div>
      </div>

      <div>
        <div class="mt-2 relative">
        <input value={email} onInput={e => setEmail(e.target.value)} required id="email" class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1 leading-tight" type="text" placeholder="Email"></input>
        </div>
        <div className="inset-x-0 bottom-0 h-[2px] bg-red-500 rounded-b"></div>
      </div>


        <div class="mt-2 relative">
          <input value={password} onInput={e => setPassword(e.target.value)} required id="password" class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1 leading-tight" type="text" placeholder="Password"></input>
          <div className="inset-x-0 bottom-0 h-[2px] bg-red-500 rounded-b"></div>
        </div>
        
        <div class="mt-2 relative">
          <input value={confPassword} onInput={e => setConfPassword(e.target.value)} required id="confPassword" class="focus:outline-none focus:shadow-outline appearance-none block w-full placeholder:text-black text-black py-1 leading-tight" type="text" placeholder="Confirm Password"></input>
          <div className="inset-x-0 bottom-0 h-[2px] bg-red-500 rounded-b"></div>
        </div>
        



    <div class="flex items-start space-x-2">
        <input onClick={() => setAdmin(!admin)} type="checkbox" className="  accent-red-600  checked:bg-red-600 focus:ring-0 h-5 w-5"/>
        <svg
    className="
      absolute 
      w-4 h-4 mt-1
      hidden peer-checked:block"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
        <div class="flex flex-col">
            <h1 class="text-gray-700 mt-0.5 font-medium leading-none">Admin Access</h1>
        </div>
    </div>
 
    <br></br>
      <div class="text-center">
      <button type="submit" class="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4  focus:outline-none focus:ring-blue-300 text-lg rounded-lg px-5 py-1.5 text-center items-center">
        Sign Up
      </button>
      </div>

    </form>

   
      <div class="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <p class="mt-5 text-center text-sm text-black">
          Already have an account?
          <a href="/." class="font-bold leading-6 text-black-600 hover:text-red-500" style={{marginLeft: 2.5 + 'px'}}>Log In</a>
        </p>
      </div>

      <img src="images/quarterCircle.png" class="fixed bottom-0 left-0"/>

</div>

      </div>
</main>
  );
}
