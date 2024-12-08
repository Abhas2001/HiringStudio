import Navigation from './Navigation';
import Mobile from './Mobile';
import './App.css';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Questions from './Questions';
=======
import Questions from './Questions';
import { useState } from 'react';
>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e

function App() {
  

  const[showmobile,setshowmobile] = useState(false);
  const[items,setitems]=useState();
  const[activeitems,setactiveitems]=useState(null);
<<<<<<< HEAD
  const[total,settotal] = useState([])
  
  const[inputvalue,setinputvalue]=useState([]);

  const[finalvalue,setfinalvalue]=useState([]);
  
  
  
  if(inputvalue?.question){
    setfinalvalue(inputvalue.question)
  }

  
  

  
 
=======
  const[inputvalue,setinputvalue]=useState([]);
console.log(inputvalue);
>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e
  return (
    <div className="m-8 flex gap-10">
       <Navigation settotal={settotal} setshowmobile={setshowmobile} items={items} setitems={setitems} setactiveitems={setactiveitems}  />
              
       {showmobile==true&&
       <Mobile items={items} total={total} setinputvalue={setinputvalue} />

<<<<<<< HEAD
}

   <Questions finalvalue={finalvalue} />
=======
       {showmobile==true?
       <Mobile items={items} setinputvalue={setinputvalue}/>
       :
      <div>hello</div>
}

<Questions inputvalue={inputvalue}/>

>>>>>>> 78957fbb4ec4c473585a4c7e0a0cc1605e15323e
    </div>
  );
}

export default App;
