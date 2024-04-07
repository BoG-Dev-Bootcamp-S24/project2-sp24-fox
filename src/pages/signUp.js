import Image from "next/image";
import { Inter } from "next/font/google";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context";
export let userSignup = createContext(false);
const inter = Inter({ subsets: ["latin"] });

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
<nav class="bg-white border-gray-300 shadow-md shadow-red-500/40">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="images/appLogo.png" class="h-8"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Progress</span>
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
        <label for="name" class="block text-md font-medium leading-6 text-gray-900">Name</label>
        <div class="mt-2">
        <input value={fullName} onInput={e => setfullName(e.target.value)} required id="fullName" class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Full Name"></input>
        </div>
      </div>

      <div>
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
        <input value={email} onInput={e => setEmail(e.target.value)} required id="email" class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Email Address"></input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-md font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input value={password} onInput={e => setPassword(e.target.value)} required id="password" class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Password"></input>
        </div>
        <div class="mt-0">
          <input value={confPassword} onInput={e => setConfPassword(e.target.value)} required id="confPassword" class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Confirm Password"></input>
        </div>
      </div>


    <div class="flex items-start space-x-3">
        <input onClick={() => setAdmin(!admin)} type="checkbox" class="border-gray-300 rounded h-5 w-5"/>
        <div class="flex flex-col">
            <h1 class="text-gray-700 mt-0.5 font-medium leading-none">Admin Access</h1>
        </div>
    </div>
 
    <br></br>
      <div class="text-center">
      <button type="submit" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-lg rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Sign Up
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
      </div>

    </form>

   
      <div class="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <p class="mt-5 text-center text-sm text-gray-500">
          Already have an account?
          <a href="/." class="font-semibold leading-6 text-red-600 hover:text-red-500" style={{marginLeft: 2.5 + 'px'}}>Click Here to Log In</a>
        </p>
      </div>

      <img src="images/quarterCircle.png" class="fixed bottom-0 left-0"/>

</div>

      </div>
</main>
  );
}
