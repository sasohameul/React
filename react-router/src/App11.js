import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  /* 
  
  npm install axios 설치
  
  */
  //빈객체
  const [data, setData] = useState({});

  const handleClick = () => {
    //fetch의 반환 promise
    //axios의 반환 promise
    //결론 == 문법이 똑같다.
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      .then(response => setData(response.data))
  }

  //화면이 로드 될때 데이터 불러오기
  //https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  const [after, setAfter] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      .then(response => setAfter(response.data))

  }, [])
console.log(after);
  let name = after.map((item) => <option key={item.key}>{item.value}</option>)

  return (

    <div>

      <h3>엑시오스 사용하기</h3>

      <button onClick={handleClick}>데이터가져오기</button>

      <p>

        {data.userId}<br />
        {data.userPw}<br />
        {data.userName}
      </p>

      <p>데이터 로드시 가져오기</p>

      <select >

        {name}

      </select>

    </div>

  )

}

export default App