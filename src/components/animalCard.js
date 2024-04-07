

export default function AnimalCard({ owner, name, breed, hours, pic}) {
    return (
        <div className="flex flex-col justify-between items-center w-[330px] h-[230px] rounded-xl mr-[40px] mb-[30px] shadow-xl">
            <img src={pic} class="w-full h-[165px] bg-red-500 rounded-t-3xl object-cover object-top"></img>
            <div className="flex flex-row justify-start items-center w-full h-[65px] rounded-b-xl">
                <div class="flex flex-row justify-center items-center bg-red-500 w-[35px] h-[35px] font-bold text-lg rounded-[50px] ml-[15px] mr-[15px] text-white">
                { owner.substr(0,1).toUpperCase() }
                </div>
                <div class="flex flex-col justify-start items-start w-[250px] h-[55px] font-bold text-lg">
                    <p className="font-bold text-lg">
                        {`${name} - ${breed}`}
                    </p>
                    <p className="text-gray-400 align-bottom text-sm font-semibold">
                        {owner} - Trained {hours} hours
                    </p>
                </div>
            </div>
        </div>
    );
}