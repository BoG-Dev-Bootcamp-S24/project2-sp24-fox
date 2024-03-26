import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<main class="">
<nav class="bg-white border-gray-300 shadow-md shadow-red-500/40">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="images/appLogo.png" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Progress</span>
    </a>
  </div>
</nav>
<br></br><br></br><br></br>
<div class="flex h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">Login to your Account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-md font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
        <input class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="Email"></input>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-md font-medium leading-6 text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input class="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-password" type="text" placeholder="Password"></input>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Log in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Don't have an account?
      <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" style={{marginLeft: 2.5 + 'px'}}>Create an Account Now</a>
    </p>
  </div>
</div>

</main>

  );
}
