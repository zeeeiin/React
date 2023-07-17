import axios from "axios";
import { useEffect } from "react";
import Category from "./Category";
import NewsList from "./NewsList";


function NewsHome() {  
/* 
  const [data, setData] = useStat([]);
  
  useEffect( () => {

    let url = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a0e8f13fef7412cb970b44bf22e454c`;

    ( async () => {
      let {data : {articles}} = await axios.get(url); //response안에 있는 데이터를 뽑기
      /* console.log(response);  console.log(articles);*/
/* 
      setData(articles);

    })();

  }, []);

  console.log(data);
  */

  return (
    <div>
      뉴스홈
      <Category/>
      <NewsList/>
    </div>    
  );
}
export default NewsHome;