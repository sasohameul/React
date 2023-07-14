import { useEffect, useState } from "react";

function App() {
  //1st - 에러를 피하기위해 빈{}를 초기값으로 넣는다. 아무것도 안넣으면 null값으로 에러남
  //const [data, setData] = useState({});

  //2nd - 초기값이 없는 상태에서는 삼항연산식으로 값이 없으면 null, 클릭 시 데이터가 불러와지면 그때는 값을 보여주는 식으로
  const [data, setData] = useState();

  const handleClick = () => {

    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setData(data);
      })
  }

  const [raw, setRaw] = useState();

  //화면 로드시 데이터 불러오기
 
  useEffect(()=>{

    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json())
    .then( data => {
  
      setRaw(data);
  
    })

  }, [])
  console.log(1);

  return (

    <div>

      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼클릭 시 데이터 가져오기</p>
      <button onClick={handleClick}>데이터로드</button>

      {
        data !== undefined ?
          <p>

            {data.userId}<br />
            {data.userPw}<br />
            {data.userName}
          </p>
          :
          null
      }


      <p>데이터 로드시 가져오기</p>
      {

        raw !== undefined ?
        <p>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}<br/>
        </p>
        :
        null

      }

    </div>

  )

}
export default App