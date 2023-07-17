import { useContext } from "react"
import UserContext from "../context/ContextAPI2"


function B() {

  //context API사용
  const {state, action}  = useContext(UserContext);
  //action 사용안할거지만 일단 꺼낼것.
  return (
    <div>
      B 컴포넌트
      {state.id}<br/>
      {state.name}
    </div>
  )
}

export default B;