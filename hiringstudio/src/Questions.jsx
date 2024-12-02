import React from 'react';
import data from './data';

const Questions = () => {
  return (
    <section className='w-full'>
    <div className='w-full border-b-[2px]'>
      <p className='text-white font-bold text-xl'>Questions</p>
    </div>

    <section className='mt-10 flex flex-col gap-10'>
        { data['software engineer'].map((x)=>{

            return(
        <div className='w-full h-24 border-[2px] text-white p-3'>
           {x.Questions}
        </div>
            )
        })
}
  
    </section>
    </section>
  )
}

export default Questions
