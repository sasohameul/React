import { Navigate, useNavigate } from "react-router-dom";


function MyPage(){
  
  const loginYN = false; //localStorage.getItem("token");
 
  //navigate훅은 렌더링 과정에서 사용이 불가함
  /*  const nav = useNavigate();
  if(!loginYN){
    nav('/');
  } */

  //to=경로, replace=기록을 남기는지 여부 (true인 경우에는 기록을 남기지않음)
  if(!loginYN){
    return <Navigate to='/' replace={true}/>
  }


  return (

    <div>
      <h3>여기는 권한이 있는 사람만 접근할 수 있음</h3>

    </div>

  )

}

export default MyPage;