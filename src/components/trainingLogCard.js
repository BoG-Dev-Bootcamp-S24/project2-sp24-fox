

export default function TrainingLogCard() {
    return (
        <div className="flex flex-row text-black justify-start items-start bg-white w-full h-[110px] mt-[10px] mb-[10px] rounded-xl drop-shadow-xl">
            <div className="flex flex-col justify-center items-center bg-blue-900 h-full w-[110px] rounded-l-xl">
                <p className="font-extrabold text-4xl text-white">
                    20
                </p>
                <p className="font-normal text-white">
                    Oct - 2023
                </p>
            </div>
            <div className="flex flex-col w-4/5 h-full">
                <div class="flex flex-row ml-[20px] mt-[5px]">
                    <p className="font-bold text-2xl">
                        Complete sit lessons
                    </p>
                    <p className="text-gray-400 align-bottom pt-[6px] ml-[5px]">
                        - 20 hours
                    </p>
                </div>
                <div class="flex flex-row ml-[20px] mb-[5px]">
                    <p className="text-gray-400 align-bottom">
                        Long Lam - Golden Retriever - Lucy
                    </p>
                </div>
                <div class="flex flex-row ml-[20px] mt-[5px]">
                    <p className="align-bottom">
                        Lucy finishes the sit lessons very well today. Should give her a treat
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[100px] h-full rounded-r-xl">
                <div className="flex justify-center items-center h-14 w-14 bg-red-500 pl-[5px] pr-[5px] pt-[5px] pb-[5px] rounded-[30px]">
                    <img src="images/activeTrainingLogo.png" class="h-7"></img>
                </div>
            </div>
        </div>
    );
}