import axios from "axios";
import { useEffect, useState } from "react";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";

import styled from "./NewsList.module.css";

function NewsList() {

  //2. 로딩처리
  const [loading, setLoading] = useState(false);

  //3. 쿼리파라미터 값 처리.
  const {category} = useParams();
  console.log(category);

  const query = category === undefined ? '' : '&category=' + category;
  /* 카테고리 요청이 들어가는 문장을 쓸 것. 문자열 & 카테고리 */


  //1. 데이터 처리
  const [data, setData] = useState([]);
  useEffect( () => {
    let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=0a0e8f13fef7412cb970b44bf22e454c`; 
    ( async () => {
      let {data: {articles} } = await axios.get(url);
      //console.log(articles);
      setData(articles);
      setLoading(true); //데이터가 도착하면 true

    })();
  
  }, [query]); //마운트 이후에 실행되고, query변수가 바뀔 때마다 실행된다.
  
  console.log(data);

  if(!loading) {
    return <div>데이터를 불러오는 중 입니다.</div>
  }


  return (
    <div>
      리스트
      <ul className={styled.wrap}>
        {/* <li>
          <a href="#">
            <img src="#"/>
            <article>
              <p>기자</p>
              <p>일자</p>
              <p>제목</p>
              <p>설명</p>             
            </article>
          </a>
        </li> */}  

        {/* {data.map( (item, index) => <NewsArticle/>) } */}

        {data.map( (item, index) => <NewsArticle item={item} key={index}/>) }


        </ul>
    </div>
  );
}
export default NewsList;


