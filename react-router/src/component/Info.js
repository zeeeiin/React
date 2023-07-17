import { useParams } from "react-router-dom";

//예시데이터
const data = {
    1 : { b: 'hong'},  /* data안의 1번이라는 키 */
    2 : { b: 'lee'},
    3 : { b: 'shin'},
}


function Info () {

    //쿼리파라미터 값
    const obj = useParams();
    console.log(obj); 
    console.log(obj.a);

    //ex. obj값을 이용해서 서버에서는 데이터를 가져오고 state로 관리

    return (
      <div>
        <h3>인포페이지</h3>

        {obj.a} 에 해당하는 값은 {data[obj.a].b }  {/* 데이터 안의 obj의 a */}

      </div>
    );
  }
  
  export default Info;