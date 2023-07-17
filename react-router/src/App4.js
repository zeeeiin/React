import { Route, Routes } from "react-router-dom";
import NewsHome from "./component2/NewsHome";
import Header from './layout/Header';

function App() {

  return (
    <Routes>
      <Route element={ <Header/> }>
        <Route path="/" element={<NewsHome/>}/> {/* 뉴스홈 */}
        <Route path="/:category" element={<NewsHome/>}/> {/* 두 번째 매개변수 : 가변적으로 변할 수 있는 값. */}
      </Route>

    </Routes>
  );
}
export default App;