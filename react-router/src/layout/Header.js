import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import styled from './Header.module.css';

function Header () {

  return (
    <Fragment>
      <header className={styled.header}>
        <h3>헤더파일</h3>
        <ul className={styled.ul}>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>

        <div>
          <button>버튼</button>
          <button>버튼</button>
        </div>

      </header>

      <section>
        <Outlet/>
      </section>

    </Fragment>
  )
}

export default Header;