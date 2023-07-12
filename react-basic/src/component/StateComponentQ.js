import { useState } from "react";

//선생님은 var로 했네..?
function StateComponentQ(){

const[num, setNum] = useState(1);

  return(

    <div>

    <h3>카운트: {num}</h3>
    {/* num++을 하면 값을 직접적으로 변경하는 것이어서 안됨*/}
    <button onClick={()=> setNum(num+1)}>증가</button>
    <button onClick={()=> setNum(num-1)}>감소</button>
    <button onClick={()=> setNum(0)}>초기화</button>
    </div>
  )

}

export default StateComponentQ