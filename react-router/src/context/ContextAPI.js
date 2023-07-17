import { createContext } from "react";

//전역으로 사용할 ContextAPI 선언
const CololrContext = createContext({color: 'red'}); //초기값은 객체로 지정

console.log(CololrContext);

//이 값을 반환받아 export
export default CololrContext;