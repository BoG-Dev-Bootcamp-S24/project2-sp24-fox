import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function CreateForm() {

    const { animals, id, setLogs } = useAppContext()
    const [title, setTitle] = useState("")
    const [animalId, setAnimalId] = useState("")
    const [hours, setHours] = useState(0)
    const [date, setDate] = useState(new Date())
    const [note, setNote] = useState("")

    const router = useRouter()

    async function submitForm() {
        try {
            const response = await fetch("/api/training" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            
                    
                  },
                body: JSON.stringify({user: id, animal: animalId, title, date, description: note, hours}),

                credentials: "include"
            })
            const nextResponse = await fetch("/api/animal" , {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
            
                    
                  },
                body: JSON.stringify({animal: animalId, hours}),

                credentials: "include"
            })
            const result = await response.text()
            const newResult = await nextResponse.text()
            if (result === "Success" && newResult === "Success") {
                alert("Success!")
                router.refresh()
                window.location.href = '/trainingDashboard'
            }
        } catch (error) {
            console.error(error)
        }
    }


    function handleForm(event) { event.preventDefault(); } 


    return (
        <div  className="flex flex-col bg-slate-00 w-9/12 h-3/4 text-black">
            <form onSubmit={(e) => {e.preventDefault; handleForm(e);  submitForm()}}>
            <label class="text-lg mb-[1px] text-black font-medium">
                Title
            </label>
            <input onChange={(e) => {setTitle(e.target.value)}} type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500"></input>
            <p class="text-lg mb-[1px] text-black font-medium">
                Animal
            </p>
            <select required onChange={(e) => {
                animals.forEach(element => {
                    if (e.target.options[e.target.selectedIndex].id === element.name) {
                        setAnimalId(element._id)

                    }
                });
                }} className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500">
                    <option hidden disabled selected value></option>
                    {animals.map((element) => {
                        return <option id={element.name}>{`${element.name} - ${element.breed}`}</option>
                    })}
            </select>
            <p class="text-lg mb-[1px] text-black font-medium">
                Total Hours Trained
            </p>
            <input onChange={(e) => setHours(e.target.value)} type="number" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500"></input>
            <div className="flex flex-row mb-[10px]">
                <div className="flex flex-col w-3/5">
                    <p class="text-lg mb-[1px] text-black font-medium">
                        Month
                    </p>
                    <select onChange={(e) => setDate(date.setMonth(e.target.value))} className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500">
                        <option hidden disabled selected value></option>
                        <option value={0}>January</option>
                        <option value={1}>February</option>
                        <option value={2}>March</option>
                        <option value={3}>April</option>
                        <option value={4}>May</option>
                        <option value={5}>June</option>
                        <option value={6}>July</option>
                        <option value={7}>August</option>
                        <option value={8}>September</option>
                        <option value={9}>October</option>
                        <option value={10}>November</option>
                        <option value={11}>December</option>
                    </select>
                </div>
                <div className="flex flex-col w-2/5 ml-[20px]">
                    <p class="text-lg mb-[1px] text-black font-medium ">
                        Date
                    </p>
                    <input onChange={(e) => setDate(new Date(date).setDate(e.target.value))}type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500"></input>
                </div>
                <div className="flex flex-col w-full ml-[20px]">
                    <p class="text-lg mb-[1px] text-black font-medium">
                        Year
                    </p>
                    <input onChange={(e) => setDate(new Date(date).setFullYear(e.target.value))} type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500"></input>
                </div>
            </div>
            <p class="text-lg mb-[1px] text-black font-medium">
                Note
            </p>
            <textarea onChange={(e) => setNote(e.target.value)} type="text" className="w-full h-[110px] border-[2px] border-gray-300 rounded-md pl-[20px] pr-[20px] pt-3 mb-[10px] text-start focus:outline-gray-500"></textarea>
            <div className="flex flex-row">
                <button onClick={() => router.push("/trainingDashboard")} type="button" className="w-[200px] h-[35px] border-[2px] border-red-500 text-red-500 rounded-md mt-[10px] mr-[20px] hover:bg-red-500 hover:text-white">
                    Cancel
                </button>
                <button type="submit" className="w-[200px] h-[35px] border-[2px] border-red-500 rounded-md mt-[10px] bg-red-500 text-white">
                    Save
                </button>
            </div>
            </form>
        </div>
    );
}