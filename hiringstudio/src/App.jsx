import Navigation from './Navigation';
import Mobile from './Mobile';
import './App.css';
import { useState } from 'react';

function App() {

  const[showmobile,setshowmobile] = useState(false);
  const[items,setitems]=useState();

  console.log(showmobile);
  console.log(items);
  return (
    <div className="m-8 flex gap-10">
       <Navigation setshowmobile={setshowmobile} setitems={setitems}/>

       {showmobile==true?
       <Mobile items={items}/>
       :
      <div>hello</div>
}
    </div>
  );
}

export default App;
