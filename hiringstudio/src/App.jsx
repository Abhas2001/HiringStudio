import Navigation from './Navigation';
import Mobile from './Mobile';
import './App.css';
import Questions from './Questions';
import { useState } from 'react';

function App() {

  const[showmobile,setshowmobile] = useState(false);
  const[items,setitems]=useState();
  const[activeitems,setactiveitems]=useState(null);
  const[inputvalue,setinputvalue]=useState([]);
console.log(inputvalue);
  return (
    <div className="m-8 flex gap-10">
       <Navigation setshowmobile={setshowmobile} setitems={setitems}/>

       {showmobile==true?
       <Mobile items={items} setinputvalue={setinputvalue}/>
       :
      <div>hello</div>
}

<Questions inputvalue={inputvalue}/>

    </div>
  );
}

export default App;
