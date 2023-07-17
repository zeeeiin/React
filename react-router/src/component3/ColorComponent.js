import CololrContext from "../context/ContextAPI";


function ColorComponent() {

  const colorHandler = (value) => {
    return <div>컬러컴포넌트  value: {value.color}</div>;
  }

  return(
    /* consumer에서는 컨텍스트API의 사용, 
      값을 전달받은 함수를 하나 선언하고, 
      첫번째 매개변수로 받는다. */

    //사용하고 싶은 컴포넌트 안에서 CololrContext로 감싸기
    <CololrContext.Consumer>
    {/*
      (value) => (<div>컬러 컴포넌트 value: {value.color}</div>)
    }
    */}

    {colorHandler}

    </CololrContext.Consumer> 
  
    )
    
}

export default ColorComponent;