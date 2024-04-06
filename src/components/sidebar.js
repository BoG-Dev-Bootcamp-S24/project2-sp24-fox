import { useAppContext } from "@/context";

export default function Sidebar() {

    const { fullName } = useAppContext()

    return (
        <div class="flex flex-col w-[300px] h-lvh">
            <div class="h-[330px] pt-[50px]">

                <button class="flex flex-row justify-start items-center bg-gray-0 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                    <img src="images/inactiveTrainingLogs.png" class="h-6 pr-[20px]"></img>
                    Training logs
                </button>
                <button class="flex flex-row justify-start items-center bg-gray-0 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                    <img src="images/inactiveAnimalLogo.png" class="h-6 pr-[20px]"></img>
                    Animals
                </button>
                <hr class="bg-gray-300 w-[250px] h-[2px] mt-[17px] ml-[15px]"></hr>

                <p class="mt-[10px] ml-[30px] mb-[8px] font-medium text-lg">
                    Admin access
                </p>
                <button class="flex flex-row justify-start items-center bg-gray-0 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                    <img src="images/inactiveAllTrainingLogo.png" class="h-6 pr-[20px]"></img>
                    All training
                </button>
                <button class="flex flex-row justify-start items-center bg-gray-0 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                    <img src="images/inactiveAllAnimalsLogo.png" class="h-6 pr-[20px]"></img>
                    All animals
                </button>
                <button class="flex flex-row justify-start items-center bg-gray-0 hover:bg-red-400 w-[240px] h-[45px] ml-[15px] pl-[15px] rounded-[13px] text-left text-lg">
                    <img src="images/inactiveAllUsersLogo.png" class="h-6 pr-[20px]"></img>
                    All users
                </button>
            </div>

            
            <div class="flex-col fixed bottom-5 bg-red-00 w-[300px] h-[60px]">
                <hr class="bg-gray-300 w-[250px] h-[2px] ml-[15px]"></hr>
                <div class="flex flex-row justify-between items-center bg-yellow-00 mt-[10px]">
                    <div class="flex flex-row justify-center items-center">
                        <div class="flex flex-row justify-center items-center bg-green-500 w-[40px] h-[40px] font-bold text-lg rounded-[50px] ml-[20px] mr-[15px]">
                            L
                        </div>
                        <div class="flex flex-col bg-red-00">
                            <p class="font-bold">
                                { fullName }
                            </p>
                            <p class="font-normal">
                                Admin
                            </p>
                        </div>
                    </div>

                    <div class="bg-blue-00 w-[50px]">
                        <button class="bg-green-00 w-[40px] h-[35px] pl-[10px] ml-[-25px]">
                            <img src="images/logoutLogo.png" class="h-6"></img>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}