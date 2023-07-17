

function dateToString(date) {

  let now = new Date(date);
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();

  /* 10보다 작으면 0 붙여서 나가게 삼항연산식 쓰기 */
  return `${year}-${month < 10 ? '0' + month : month }-${day < 10 ? '0' + day : day}`;
}


function NewsArticle( {item} ) {  
   //console.log(data);
   {/* {data.map( (item, index) =>  */}

  return (    
        <li>
          <a href={item.url}>
            <img src={item.urlToImage} alt={item.title} />
            <article>
              <p>{item.author}</p> {/* 기자 */}
              <p>{dateToString(item.publishedAt)}</p> {/* 일자 */}
              <p>{item.title}</p> {/* 제목 */}
              <p>{item.description}</p> {/* 설명 */}            
            </article>
          </a>
        </li>        
  );
}
export default NewsArticle;