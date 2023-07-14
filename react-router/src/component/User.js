import { useLocation, useSearchParams } from "react-router-dom";

function User(){

//쿼리스트링 값을 받는 방법1
const location = useLocation();
//console.log(location); ->방법이 까다로움

//쿼리스트링 값을 받는 방법2 
//- 첫번째 인덱스에는 set,get가진 객체 반환/
//- 두번째 인덱스에는 쿼리스트링을 직접 변경할 수 있는 함수                             
const [obj, setObj] = useSearchParams();

let id = obj.get("id"); //=request.getParameter("키")
let name = obj.get("name");

const handleClick = () =>{

  setObj({id: '탕수육', name: '짜장면맛있겠다'}); //이후에 렌더링

 


}

return(

  <div>
    <h3>유저페이지</h3>

    쿼리스트링 id: {id}<br/>
    쿼리스트링 name: {name}<br/>

    <button onClick={handleClick}>쿼리스트링제어하기</button>

  </div>

)

}

export default User