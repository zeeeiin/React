import { createContext, useState } from "react";

//1.
const UserContext = createContext({
  state: {id: '초기값', name: '초기값'},
  action: {
    setUser: () => {}
  }
});

//2.Provider 함수 선언 - 매개값을 받아서 새로운 리턴으로 반환
const UserProvider = ({children})=> { 
//반드시 childrend이어야한다. 하위 태그를 모두 전달받아 children속성으로 뽑고 프로바이더로 보내주는 역할을 한다.
   
  const [user, setUser] = useState({id:'aaa', name: 'hong'});
  //2개를 전달받아 createContextAPI의 매개값으로 넣어줄 것.

  const value = {
    state : user,
    action : {setUser}
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}
//3. Consumer 함수 반환
const UserConsumer = UserContext.Consumer;

//일반 export는 여러개일 수 있고
export {UserProvider , UserConsumer};

//기본 export는 하나여야한다.
export default UserContext;