import { useState } from "react";



function Mobile(){

    const[inputval,setinputval]=useState('');
    const[chatarr,setchatarr]=useState([]);
    const[chat,setchat]=useState(false);
    const[loaded,setloaded]=useState(false);

   const Startarr=['Hi','Hello','Hey'];
   console.log(chatarr);

    const handleupload = () =>{
       setchat(true);
     
       setchatarr((prev)=>[...prev,inputval]);

    }

    const handlechange = (e) =>{
      
        setinputval(e.target.value);

    }

    setTimeout(() => {

        if(Startarr.includes(chatarr[0])){
        setloaded(true);
        }
        else{
            setloaded(false);
        }
    }, 2000);
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
    {chat?
    <div>
    
    {chatarr.map((x)=>{return(
    <div className="w-[100%] h-[80px]">
        
    <div className="float-end  bg-[green] w-auto p-4 rounded-lg m-4 bg-opacity-25 text-white">
      {x}

    </div>
  </div>
  )})
}
</div>
  
    :<div></div>
}
{loaded==true && chat==true?
<div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
Hello! Could you share the job title of the position you're hiring for?
</div>
: loaded==false && chat==true?
<div className="bg-[#DBE7FA] w-[20%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
   Thinking...
</div>
:
<div></div>
}

    </div>

    <div className="w-[100%] flex justify-center items-center relative ">
        <input className="w-[94%] bg-[#434a4c] p-6 mb-8 rounded-lg" placeholder="Response..." type="Response" onInput={handlechange}  />

        <div className="absolute top-5 right-6 flex justify-center items-center">
        <button onClick={handleupload}><img width={30}  src="https://www.shutterstock.com/image-vector/upload-file-outline-icon-design-260nw-1666246474.jpg" alt="" srcset="" /></button>
        </div>
    </div>
   </div>

        </div>
    )
}

export default Mobile