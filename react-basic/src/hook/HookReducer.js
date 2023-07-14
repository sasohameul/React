import { useReducer } from "react";


//1. 리듀서 함수 (state값, 리듀서 실행함수로 전달하는 상태값)
const myReducer = (state, action) => {

  console.log(state);
  console.log(action);

  //action에 따라서 상태를 변경하고 return state반환
  if(action.x === 'increase'){

    state = {value: state.value + 1};
  } else if(action.x === 'decrease'){
    state = {value: state.value <= 0? 0: state.value-1};
  } else {
    state = {value: 0};

  }

  return state;
}


function HookReducer ()  {

  //2. const[현재 state값, 리듀서 실행함수]= 리듀서 훅 (리듀서함수, state초기값)
                               //첫번째는 실행시킬 리듀서함수명이 들어가고, 두번째는 state초기값이 들어간다.
  const [state,func] = useReducer(myReducer, {value: 0})
  
  const handleClick = () => {
    //리듀서 함수를 실행
    func({x: 'increase'});

  }
  

return(

   <div>

    <h3>카운트: {state.value} </h3>
    {/* num++을 하면 값을 직접적으로 변경하는 것이어서 안됨*/}
    <button onClick={handleClick}>증가</button>
    <button onClick={()=> func({x: 'decrease'})}>감소</button>
    <button onClick={()=> func({x: 'reset'})}>초기화</button>
    </div>


)

}

export default HookReducer;