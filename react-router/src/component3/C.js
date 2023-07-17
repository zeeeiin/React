import { useContext } from "react"
import UserContext from "../context/ContextAPI2"

function C() {

  //context API사용
  const {state, action}  = useContext(UserContext);
 
  return (
    <div>
      C 컴포넌트
      {state.id}<br/>
      {state.name}
    </div>
  )
}

export default C