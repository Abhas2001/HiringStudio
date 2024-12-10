import React, { useEffect, useState } from 'react';
import data from './data';
import { useMobile } from './useMobile';

const Questions = (props) => {

  let isMobile = useMobile();
  
  const[length,setlength] = useState([])
  const[value,setvalue] = useState([]);
   
  useEffect(()=>{
   if(props.chatarr.length>0){
      setlength(props.chatarr.length)
   }
  },[props.chatarr.length])
  
  console.log(props.chatarr);
  
  
  useEffect(()=>{
   if(props.chatarr.length>0){
    
    setTimeout(()=>{
    setvalue(props.chatarr);
  },4000)
   }
   else{
    setvalue('basemessage');
   }
    
  },[props.chatarr])

  
 
   
   
  return (
    <section className={isMobile?'w-[169%]':'w-full'}>
    <div className='w-full border-b-[2px]'>
      <p className='text-white font-bold text-xl'>Questions</p>
    </div>
    <section className='mt-4 flex flex-col gap-8'>
        {data[value[value.length-1]?.question]?data[value[value.length-1].question].map((x)=>{

            return(
        <div className='w-full h-24 border-[2px] text-white p-3'>
           {x.questions}
        </div>
            )
        })
        :
        <div></div>
}
  
    </section>
   
    </section>
  )
}

export default Questions
