

export default function TrainingLogCard({breed, hours, description, date, title, name, owner}) {
    
    return (
        <div className="w-[60rem]">
        <div className="flex flex-row text-black justify-start items-start  bg-white w-full h-32 mt-[10px] mb-[10px] rounded-xl drop-shadow-xl">
            <div className="flex flex-col justify-center items-center bg-blue-900 h-full w-44 rounded-l-xl">
                <p className="font-extrabold text-4xl text-white">
                    {new Date(date).getDate()}
                </p>
                <p className="font-normal text-white">
                    {`${new Date(date).toLocaleString('default', { month: 'short' })} - ${new Date(date).getFullYear()}`}
                </p>
            </div>
            <div className="flex flex-col w-full mr-16 h-full">
                <div class="flex flex-row ml-[20px] mt-[5px]">
                    <p className="font-bold text-2xl">
                        {title}
                    </p>
                    <p className="text-gray-400 align-bottom pt-[6px] ml-[5px]">
                        {`- ${hours} hours`}
                    </p>
                </div>
                <div class="flex flex-row w-full ml-[20px] mb-[5px]">
                    <p className="text-gray-400 align-bottom">
                        {`${owner} - ${breed} - ${name}`}
                    </p>
                </div>
                <div class="flex flex-row w-full ml-[20px] mt-[5px]">
                    <p className="align-bottom">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-36 h-full rounded-r-xl">
                <div className="flex justify-center items-center h-14 w-14 bg-red-500 pl-[5px] pr-[5px] pt-[5px] pb-[5px] rounded-[30px]">
                    <img src="images/activeTrainingLogo.png" class="h-7"></img>
                </div>
            </div>
        </div>
        </div>
    );
}