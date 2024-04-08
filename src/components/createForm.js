

export default function CreateForm() {
    return (
        <div className="flex flex-col bg-slate-00 w-9/12 h-3/4">
            <p class="text-lg mb-[1px] text-black font-medium">
                Animal Name
            </p>
            <input type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500"></input>
            <p class="text-lg mb-[1px] text-black font-medium">
                Breed
            </p>
            <input type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500"></input>
            <p class="text-lg mb-[1px] text-black font-medium">
                Total Hours Trained
            </p>
            <input type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] mb-[10px] focus:outline-gray-500"></input>
            <div className="flex flex-row mb-[10px]">
                <div className="flex flex-col w-3/5">
                    <p class="text-lg mb-[1px] text-black font-medium">
                        Birth Month
                    </p>
                    <select className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500">
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
                    <input type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500"></input>
                </div>
                <div className="flex flex-col w-full ml-[20px]">
                    <p class="text-lg mb-[1px] text-black font-medium">
                        Year
                    </p>
                    <input type="text" className="w-full h-[45px] border-[2px] border-gray-300 rounded-md pl-[20px] pb-[2px] focus:outline-gray-500"></input>
                </div>
            </div>
            <p class="text-lg mb-[1px] text-black font-medium">
                Note
            </p>
            <textarea type="text" className="w-full h-[110px] border-[2px] border-gray-300 rounded-md pl-[20px] pr-[20px] pt-3 mb-[10px] text-start focus:outline-gray-500"></textarea>
            <div className="flex flex-row">
                <button className="w-[200px] h-[35px] border-[2px] border-red-500 text-red-500 rounded-md mt-[10px] mr-[20px] hover:bg-red-500 hover:text-white">
                    Cancel
                </button>
                <button className="w-[200px] h-[35px] border-[2px] border-red-500 text-red-500 rounded-md mt-[10px] hover:bg-red-500 hover:text-white">
                    Save
                </button>
            </div>
        </div>
    );
}