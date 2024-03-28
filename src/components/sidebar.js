

export default function Sidebar() {
    return (
        <div class="flex-col bg-blue-500 w-[300px] h-lvh">
            <div class="justify-center items-center bg-yellow-200 h-[330px] pt-[50px]">
                <button class="bg-gray-50 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[50px] rounded-[13px] text-left font-medium">
                    Training logs
                </button>
                <button class="bg-gray-50 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[50px] rounded-[13px] text-left font-medium">
                    Animals
                </button>

                <hr class="bg-gray-300 w-[270px] h-[3px] mt-[20px] ml-[15px]"></hr>

                <p class="mt-[10px] ml-[25px] mb-[8px] font-medium">
                    Admin access
                </p>
                <button class="bg-gray-50 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[50px] rounded-[13px] text-left font-medium">
                    All training
                </button>
                <button class="bg-gray-50 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[50px] rounded-[13px] text-left font-medium">
                    All animals
                </button>
                <button class="bg-gray-50 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[50px] rounded-[13px] text-left font-medium">
                    All users
                </button>
            </div>
            <div class="flex-col absolute bottom-0 bg-red-200 w-[300px] h-[60px]">
                <hr class="bg-gray-300 w-[270px] h-[3px] ml-[15px]"></hr>
                <div class="mt-[2px]">
                    <p class="font-bold ml-[15px] pl-[50px]">
                        Long Lam
                    </p>
                    <p class="font-normal ml-[15px] pl-[50px]">
                        Admin
                    </p>
                </div>
            </div>
        </div>
    );
}