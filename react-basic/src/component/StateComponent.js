import { useState } from "react"


function StateComponent() {

  //state - 컴포넌트 안에서 변화하는 값(즉 상태변수)
  //const result = useState('초기값')
  //console.log(result);//초기값과 함수가 들어있음
  // const a = result[0]; //현재값(초기값)
  // const b = result[1]; //함수   굳이 이렇게 쓰지않고 밑에 [data(꺼낼변수명),set변수명]으로 사용

  const [data, setData] = useState('초기값');
  const [num, setNum] = useState(0);
  const [color,setColor] = useState('black');

  //data = '이거 바꿔야지';
  //-> useState의 값은 절대 직접 수정하면 안됩니다!!

  //값을 변경하면 처음부터 다시 시작해서 한줄씩 그리는데 
  //이렇게되면 또 setDate를 만나기때문에 무한루프를 돌게됨. error
  //그렇기때문에 state는 이벤트 or 특정 함수안에서 바꾸도록 처리해야합니다.
  //setData('변경해야지');

  const handleData = () => {

    setData('체인지!'); //비동기적으로 state값을 변경 -> 화면을 리렌더링하게됩니다.
    setNum(10);
    
  }

  //빨간색 변경
  //const handleColor = () => setColor('red');

  return (
    <div>

      state값 : {data}<br />
      
      state값 : {num}
      {/* 소괄호를 붙이게되면 handleData라는 함수를 호출해서 return을 받겠다는 뜻 */}
      <br />
      <button onClick={handleData}>스테이트값 변경</button> <br/>
      <hr/>
      <h3 style={{color: color}}>{data}</h3>

                      {/* 위에 const handleColor라는 변수명을 사용하지않고 바로 함수넣기 */}
      <button onClick={()=>setColor('red')}>붉은색</button>
      <button onClick={()=>setColor('blue')}>푸른색</button>
      <button onClick={()=>setColor('orange')}>그 사이 3초 짧은 색</button>
    </div>


  )



}

export default StateComponent
