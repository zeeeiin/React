import A from "./component3/A";
import B from "./component3/B";
import { UserProvider } from "./context/ContextAPI2";


function App() {

  return (

    <UserProvider>
      <A/>
      <B/>
    </UserProvider>
   
     /*  <UserContext.Provider value={value}>{children}</UserContext.Provider> */

  )
}
export default App;