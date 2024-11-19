function Mobile(){

    const handleupload = () =>{
        console.log("sgfdjhfhjdbvjbfhj");

    }
    return(
        <div className='h-[93vh] w-[50vh] bg-[#DBE7FA] border-[0.5px] border-white bg-opacity-10 rounded-lg'>

   <div className="h-[100%] flex flex-col justify-between">
    <div>
    <div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
       
    Hey! I'm an LLM fine-tuned to help generate interview questions!

    </div>
    <div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
    To get started, copy and paste your full job description, if you have one.

    </div>
    </div>

    <div className="w-[100%] flex justify-center items-center relative ">
        <input className="w-[94%] bg-[#434a4c] p-6 mb-8 rounded-lg" placeholder="Response..." type="Response"  />

        <div className="absolute top-5 right-6 flex justify-center items-center">
        <button onClick={handleupload}><img width={30}  src="https://www.shutterstock.com/image-vector/upload-file-outline-icon-design-260nw-1666246474.jpg" alt="" srcset="" /></button>
        </div>
    </div>
   </div>

        </div>
    )
}

export default Mobile