import Navigation from './Navigation';
import Mobile from './Mobile';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  

  const[showmobile,setshowmobile] = useState(false);
  const[items,setitems]=useState();
  const[activeitems,setactiveitems]=useState(null);
  const[total,settotal] = useState([])
  

  

  
 
  return (
    <div className="m-8 flex gap-10">
       <Navigation settotal={settotal} setshowmobile={setshowmobile} items={items} setitems={setitems} setactiveitems={setactiveitems}  />
              
       {showmobile==true&&
       <Mobile items={items} total={total} />

}
    </div>
  );
}

export default App;
