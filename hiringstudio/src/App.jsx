import Navigation from './Navigation';
import Mobile from './Mobile';
import './App.css';
import { useEffect, useState } from 'react';
import Questions from './Questions';
import { useMobile } from './useMobile';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

function App() {
  

let isMobile = useMobile();

  

  const[showmobile,setshowmobile] = useState(false);
  const[items,setitems]=useState();
  const[activeitems,setactiveitems]=useState(null);
  const[total,settotal] = useState([])
  
  const[inputvalue,setinputvalue]=useState([]);

  // const[finalvalue,setfinalvalue]=useState([]);
  
  
console.log(isMobile);


  
  

  
 
  return (
    <div className={isMobile?"mt-[1.25rem] flex gap-4 h-[100vh] overflow-y-hidden":"m-8 flex gap-10"}>
       <Navigation settotal={settotal} setshowmobile={setshowmobile} items={items} setitems={setitems} setactiveitems={setactiveitems}  />
              
       {showmobile===true&&
       <Mobile items={items} total={total} setinputvalue={setinputvalue}/>

}

   {/* <Questions final={inputvalue} /> */}
    </div>
  );
}

export default App;
