import BoardListFeature from '@/features/home/boardList/BoardListFeature.tsx';

const BoardListWidget = () => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="flex flex-col items-center mb-16">
        <h1 className="font-bold text-2xl">게시글 목록</h1>
        <p></p>
      </div>
      <BoardListFeature />
    </div>
  );
};

export default BoardListWidget;