import { useState } from "react"
import HookEffect from "./hook/HookEffect"
import HookRef from "./hook/HookRef";
import HookQ from "./hook/HookQ";
import HookQ_answer from "./hook/HookQ_answer";
import HookReducer from "./hook/HookReducer";

import IterationComponentQ2_ver2 from "./component/IterationComponentQ2"

function App() {

  //보이기, 숨기기
  const [visible, setVisible] = useState(true); 


  const handleVisible = () => {

    setVisible(!visible);

  }
console.log(visible);


  return (

    <>

    <button onClick={handleVisible}>{visible ? '숨기기' : '보이기'}</button>
    {visible ? <HookEffect /> : null}
      
      <hr/>
      <HookRef/>

      <hr/>
      <HookQ/>
      <hr/>
      <HookQ_answer/>

      <hr />
      <HookReducer/>

      <hr/>
      <IterationComponentQ2_ver2/>
          



    </>
  )



}

export default App