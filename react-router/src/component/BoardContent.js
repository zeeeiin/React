import { useParams } from "react-router-dom";


function BoardContent () {

  const {num} = useParams();

  return (
    <div>

      <h3>BoardContent 페이지</h3>
      {num} 입니다~

    </div>
  );
}

export default BoardContent;