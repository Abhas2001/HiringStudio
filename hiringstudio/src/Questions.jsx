import React from 'react';
import data from './data';

const Questions = (props) => {
<<<<<<< HEAD

    
=======
>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e
  return (
    <section className='w-full'>
    <div className='w-full border-b-[2px]'>
      <p className='text-white font-bold text-xl'>Questions</p>
    </div>
    <section className='mt-10 flex flex-col gap-10'>
<<<<<<< HEAD
        { data[props.finalvalue]?.map((x)=>{

            return(
        <div className='w-full h-24 border-[2px] text-white p-3'>
           {x.questions}
=======
        { data[props.inputvalue]?.map((x)=>{

            return(
        <div className='w-full h-24 border-[2px] text-white p-3'>
           {x.Questions}
>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e
        </div>
            )
        })
}
  
    </section>
   
    </section>
  )
}

<<<<<<< HEAD
export default Questions
=======
export default Questions
>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e
