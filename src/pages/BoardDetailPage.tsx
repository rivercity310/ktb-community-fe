import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const { boardId } = useParams();
  console.log(boardId);

  return (
    <div>
      BoardDetail
    </div>
  );
};

export default BoardDetail;