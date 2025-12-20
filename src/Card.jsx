import heroImg from "./assets/Hero.svg"
const Card= ()=>{
    

    return(
        <div >
            <section className=" relative bg-white flex  mx-90 my-18 rounded-3xl">
        <div className="flex gap-6 mx-5 my-5 relative">
              <img 
                src={heroImg}
                alt="Hero"
                className="relative w-64 rounded-xl shadow-lg"
              />
              <div className="absolute ml-5 flex-col gap-4">
                <div className="flex mt-10 items-center gap-4">
               <div className="my-2 w-12 h-12 rounded-full flex justify-center
                 items-center bg-blue-200 font-bold ">1 </div>  
                 <p className="text-[10px] font-medium text-gray-400">Step 1 <br /> 
                 <p className="text-[15px] text-white">YOUR INFO</p></p>
                 </div>
                 <div className="flex items-center gap-4">
                 <div className="my-2 w-12 h-12 rounded-full flex justify-center
                 items-center  border-blue-200 border-2 text-blue-200 font-bold
                 hover:bg-blue-200  hover:text-black cursor-pointer">2 </div>
                 <p className="text-[10px] font-medium text-gray-400">Step 2 <br /> 
                 <p className="text-[15px] text-white">SELECT PLANS</p></p>
                 </div>
                 <div className="flex items-center gap-4">
                 <div className="my-2 w-12 h-12 rounded-full flex justify-center
                 items-center  border-blue-200 border-2 text-blue-200 font-bold
                 hover:bg-blue-200  hover:text-black cursor-pointer">3 </div>
                 <p className="text-[10px] font-medium text-gray-400">Step 3 <br /> 
                 <p className="text-[15px] text-white">ADD-ONS</p></p>
                 </div>
                 <div className="flex items-center gap-4">
                 <div className="my-2 w-12 h-12 rounded-full flex justify-center
                 items-center border-blue-200 border-2 text-blue-200 font-bold 
                  hover:bg-blue-200  hover:text-black cursor-pointer">4 </div>
                 <p className="text-[10px] font-medium text-gray-400">Step 3 <br /> 
                 <p className="text-[15px] text-white">SUMMARY</p></p>
                 </div>
                </div>
               </div>
               <div className="mt-15 mx-15"><p className="font-extrabold text-blue-900
               text-[20px] ">PERSONAL INFORMATION</p>
               <p className=" mt-2 mb-8 text-[13px] text-gray-400">Please provide your name,
                 email address and phone number.</p>
                 <form action="/submit">
                  <p className="text-[12px] text-blue-800 font-bold py-1">Name</p>
                  <input className="border-2 border-gray-200 text-gray-500 rounded w-full mb-5
                   px-4 py-2 text-[13px]" type="text" placeholder="e.g. Steve Harrington" />

                   <p className="text-[12px] text-blue-800 font-bold py-1">Email Address</p>
                  <input className="border-2 border-gray-200 text-gray-500 rounded w-full mb-5
                   px-4 py-2 text-[13px]" type="text" placeholder="e.g. steveharrington@gmail.com" />

                   <p className="text-[12px] text-blue-800 font-bold py-1">Phone Number</p>
                  <input className="border-2 border-gray-200 text-gray-500 rounded w-full mb-5
                   px-4 py-2 text-[13px]  " type="text" placeholder="e.g. +123456789" />

                   <button className="bg-blue-900 rounded-md p-2 text-[15px] text-white 
                    absolute bottom-10 cursor-pointer right-25 hover:bg-blue-300 hover:text-black
                    ">NEXT STEP</button>
                 </form>
               </div>
              </section>
            </div>
    );
}
export default Card 