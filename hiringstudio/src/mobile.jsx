import { useEffect } from "react";
import { useState } from "react";
import  './Mobile.css'
import Questions from "./Questions";
import { useMobile } from "./useMobile";



function Mobile(props){

    const[inputval,setinputval]=useState('');
    const[chatarr,setchatarr]=useState([]);
    const[chat,setchat]=useState(false);
    const[loaded,setloaded]=useState(false);
    const[inbox,setinbox]=useState([]);
    const[fixedarr,setfixedarr] = useState(new Array(props.total).fill(0))
    const[hover,sethover]=useState(false);
 

    let isMobile = useMobile();



    useEffect(()=>{
   props.setinputvalue(chatarr);
},[chatarr])
    
     

    let index = props.items
    useEffect(()=>{
        setinbox([])
    },[index])
 
   useEffect(()=>{
     setfixedarr(new Array(props.total).fill(0))
    },[props.total])

    useEffect(()=>{
        
        const updatedFixedArr = [...fixedarr];

        updatedFixedArr[index] = inbox;
    
       
        setfixedarr(updatedFixedArr);
        
    },[inbox])
  

    console.log(fixedarr);
    
   
   

   const Startarr=['Hi','Hello','Hey'];

   const Questionarr=['SoftwareEngineer','BuisnessAnalyst','DataAnalyst','Testing']
   

  
  

   
    const handleupload = () =>{
       setchat(true);
     
       setchatarr((prev)=>[...prev,{'question':inputval}]);

       
    

    }

 
    

    useEffect(()=>{

        if(chatarr.length>0&&  Startarr.includes(chatarr[chatarr.length-1].question)){

           
            setinbox((prev)=>[...prev,{'question':inputval,'answer':'Hello! Could you share the job title of the position youre hiring for?'}]);
         
            }

         else if(chatarr.length>0 && Questionarr.includes(chatarr[chatarr.length-1].question))  {

            setinbox((prev)=>[...prev,{'question':inputval,'answer':'Thank you for sharing the role! Here are top five questions.'}]);
         
        
        } 
        else {
              setinbox((prev) => [ ...prev, { 'question': inputval, answer: "I'm sorry, I didn't understand that. Could you clarify?" }
                        ]);
                    }

    },[chatarr])
       

    const handlechange = (e) =>{
      
        setinputval(e.target.value);

    }

  
    
    setTimeout(() => {
      
   

        if(chatarr.length>0&&Startarr.includes(chatarr[0].question)){
        setloaded(true);
        
        }

        
      else if(chatarr.length>0&&Questionarr.includes(chatarr[0].question)){
            setloaded(true);
            
            }
        else{
            setloaded(false);
        }
    }, 4000);

 
    return(
        <section className={isMobile?"w-[169%] flex justify-between gap-[20px]":"w-full flex justify-between gap-[40px]"}>

        <div className={isMobile?'h-[93vh] flex w-[165vh] bg-[#DBE7FA] border-[0.1px] border-white bg-opacity-10 rounded-lg text-[10px]':'h-[93vh] flex w-[65vh] bg-[#DBE7FA] border-[0.1px] border-white bg-opacity-10 rounded-lg'} onMouseEnter={()=>{sethover(true)}} onMouseLeave={()=>{sethover(false)}}>

   <div className="h-[100%] flex flex-col justify-between">
    <div className={ `${hover? 'scrollclass':'scrollhidden'}`}>
    <div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
       
  {props.items} Hey! I'm an LLM fine-tuned to help generate interview questions!

    </div>
    <div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
    To get started, copy and paste your full job description, if you have one.

    </div>
    {chat?
    <div>
    
    {(fixedarr[index]||[]).map((x)=>{return(
        <div>
    <div className="w-[100%] h-[80px]">
        
    <div className="float-end  bg-[green] w-auto p-4 rounded-lg m-4 bg-opacity-25 text-white">
      {x.question}

    </div>
  </div>
  
  <div className="bg-[#DBE7FA] w-[60%] p-4 rounded-lg m-4 bg-opacity-15 text-white">
 {loaded&&chat? x.answer:'Thinking...'}
  </div>
 
:

<div></div>
    
  </div>
  )})
}
</div>
  
    :<div></div>
}

    </div>
    <div>
  
    </div>

    <div className="w-[100%] flex justify-center items-center relative ">
        
        <input className="w-[94%] bg-[#434a4c] p-6 mb-8 rounded-lg text-white" placeholder="Response..." type="Response" onInput={handlechange}  />

        <div className="absolute top-5 right-6 flex justify-center items-center">
        <button onClick={handleupload}><img width={30}  src="https://www.shutterstock.com/image-vector/upload-file-outline-icon-design-260nw-1666246474.jpg" alt="" srcset="" /></button>
        </div>
       
    </div>
   </div>
        </div>
         <section>
       <Questions chatarr={chatarr}/>
       </section>
        </section>
    )
}

export default Mobile