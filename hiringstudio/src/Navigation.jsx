import React from 'react'
import { useState } from 'react'

const Navigation = () => {

    const[hide,sethide] = useState(false);
    const[light,setlight] = useState(false);
    const[hidebtn,sethidebtn] = useState(false);
    const[more,setmore]= useState(false);
    const[count,setcount]=useState(1);
    const[opt,setopt]=useState();
    const[arr,setarr] = useState([0]);
 

    const handleadd = () =>{
        setcount(count+1);
        arr.push(count);
    }
    // console.log(arr);
    const handlehide=()=>{
        sethide(true);
    }

    const handleshow=()=>{
        sethide(false);
    }

    const handlemore  = (x) =>{
        setopt(x)
         setmore(!more);
    }
    const handledelete = (x) =>{
       console.log(arr);
   
        let newarr=arr.filter(item => item !== x)

        console.log(newarr);
        setarr(newarr);
    }
    // console.log(opt);
    // console.log(arr);
  return (
    <div className={`text-white bg-black border-[1px] border-gray-500 ${hide==false?'w-[224px]':'w-[100px]'} h-[93vh] rounded-md`}>
      <section onMouseEnter={()=>{sethidebtn(true)}} onMouseLeave={()=>{sethidebtn(false)}} className='h-[80px] border-b-[1px] border-gray-500 p-[20px]'>
        <div className='flex justify-between'>

            <button onClick={handleshow}><img width={40} height={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43heomsNORJEQWniVoAAS9fwOEmSiheanwQ&s" alt="" srcset="" />
            
            <div className='text-[10px]'>Hiring Studio</div>
            
            </button>
            {hide==false&&hidebtn==true?
            <button onMouseEnter={()=>{setlight(true)}} onMouseLeave={()=>{setlight(false)}} onClick={handlehide} className={`${light==true?'text-white':'text-gray-700'}`}>Hide</button>
            :null
}
        </div>
      </section>


      <section className='h-[50vh]'>
        <div className='flex justify-between p-4 text-gray-500'>
            <h1 className='text-[14px] font-semibold'>QUESTIONS</h1>
            <button className='w-5 h-5 rounded-full bg-[#282c34] flex justify-center items-center text-white' onClick={handleadd}>+</button>
        </div>
        

        <div className='flex flex-col gap-y-1'>
        { arr.map((x)=>{

       return(
        <section className='w-[100%] flex justify-between p-4 '>
            <div className='font-serif text-[12px] text-white' >
                Untitled

                <div className='font-thin text-[10px] text-gray-500'>
                    {x} minutes ago
                </div>
            </div>
            <div className={`h-2 w-2  ${more==true?'mt-8':'mt-2'}  flex flex-col justify-center items-center ${more==true && x==opt? 'bg-[#282c34]':null}`}>
            <button className='text-[12px] leading-none' onClick={()=>{handlemore(x)}}>...
            
            {more==true && x==opt?
            <div className='w-20 h-14 p-2 flex flex-col gap-2 bg-[#282c34] relative mt-1  left-6'>
                <button >share</button>
                <button onClick={()=>{handledelete(opt)}}>delete</button>
            </div>
            :
            null
        }
            </button>

           
            </div>
        </section>
       )
         })
}
</div>
        </section>

   
    </div>
  )
}

export default Navigation
