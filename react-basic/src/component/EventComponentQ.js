import { useState } from "react"

function EventComponentQ (){

const [result,setResult] = useState("메뉴를 선택하세요");

const handleChange = (e) =>{

  setResult(e.target.value);
  
}

return (

  <div>
    <h3>셀렉트 태그 핸들링(실습)</h3>

    <select name="menu" onChange={handleChange}  >
    <option >햄버거</option>
    <option >피자</option>
    <option >떡볶이</option>
    <option >마라샹궈</option>
    <option >새콤달콤</option>
    <option >마라탕</option>

    </select>

    <h3>선택한 결과</h3>
    <h2>{result}</h2>

  </div>

)

}

export default EventComponentQ