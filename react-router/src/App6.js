import A from "./component3/A"
import B from "./component3/B"
import { UserProvider } from "./context/ContextAPI2"

function App(){

return(

  <div>
    <UserProvider>
      <A/>
      <B/>
    </UserProvider>
  </div>




)

}

export default App