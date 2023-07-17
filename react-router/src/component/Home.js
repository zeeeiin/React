import { Link } from "react-router-dom";


function Home () {
    return (
      <div>
        <h3>메인페이지</h3>

        {/* a는 Link로 바뀐다. */}
        <ul>
            <li><Link to="/user">회원페이지</Link></li>
            <li><Link to="/user?id=aaa123&name=hong">회원페이지</Link></li>
            <li><Link to="/info">인포페이지</Link></li>
        </ul>


      </div>
    );
  }
  
  export default Home;