import { Link, Outlet } from "react-router-dom";

function Board () {
  
    return (
      <div>

        <h3>Board페이지</h3>

        <ul>
            <li><Link to='/board/1'>1번글</Link></li>
            <li><Link to='/board/2'>2번글</Link></li>
            <li><Link to='/board/3'>3번글</Link></li>
        </ul>

        <Outlet/>

      </div>
    );
  }
  
  export default Board;