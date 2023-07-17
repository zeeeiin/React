import { useEffect, useState } from "react";



function App() {

  //fetch로 데이터 가져오기

  //1st - 객체의 초기값 선언하기
  //const [data, setData] = useState({});

  /* es5문법 */
  /* const handleClick = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( function(response) {})

  } */


  //2nd - 삼항연산자로 표현
  const [data, setData] = useState();

  //fetch는 내장되어 있어서 바로 사용 가능
  /* es6문법 */
  const handleClick = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      //console.log(data);
      setData(data);
    })

  }


  const [raw, setRaw] = useState();

  //useEffect로 화면 로드시 데이터 불러오기
  useEffect( () => {
 
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json() )
    .then( data => {
      //console.log(data);
      setRaw(data);
      })
  
  }, [])

  console.log(1);

  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>

      <p>버튼 클릭시 데이터 가져오기</p>
      <button onClick={handleClick}>데이터로드</button>   
    
      <p>데이터 로드시 가져오기</p>

      {/* fetch로 데이터 가져오기 */}
      {
        data !== undefined ? /* 데이터가 있다면 p태그를 통째로 */
        <p>
          {data.userId}<br/>
          {data.userPw}<br/>
          {data.userName}
        </p>
        : 
        null /* 그렇지 않다면 null값 반환 */
      }

      {/* useEffect로 화면 로드시 데이터 불러오기 */}
      {
        raw !== undefined ? /* 데이터가 있다면 p태그를 통째로 */
        <p>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}
        </p>
        : 
        null /* 그렇지 않다면 null값 반환 */
      }
        
    
    </div>
  );
}

export default App;