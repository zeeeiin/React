import ColorComponent from "./component3/ColorComponent";
import CololrContext from "./context/ContextAPI";


function App() {


  return (

    /* Provider - 하위컴포넌트에 전달할 props값을 제공하는 역할 
      - value 속성에는 consumer에서 제어할 값이 들어간다.  */
    <div>
      <CololrContext.Provider value={ {color: 'green'} }>
        <ColorComponent/>
      </CololrContext.Provider>
    </div>
  );
}
export default App;