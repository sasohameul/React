import { useContext } from "react"
import UserContext from "../context/ContextAPI2";

function B(){

  const {state, action}= useContext(UserContext);

return(
//context API 사용


  <div>

  <h3>B컴포넌트</h3>
  {state.id}<br/>
  {state.name}

  </div>



)

}

export default B