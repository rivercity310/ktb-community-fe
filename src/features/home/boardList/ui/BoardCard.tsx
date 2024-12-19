import { Board } from '@/entities/board/types.ts';
import { FC } from 'react';

interface BoardCardProps {
  board: Board;
}

const BoardCard: FC<BoardCardProps> = ({ board }) => {
  const { boardId, title, createdAt, likeCnt, viewCnt, commentCnt, writerProfileImg, writerNickname} = board;

  return (
    <div className="w-[600px] h-[160px] border-2 rounded-3xl px-2 bg-gray-200">
      <div
        className="p-4 flex flex-col justify-between">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={writerProfileImg} alt="Avatar of Jonathan Reinink" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none text-[16px] font-semibold">{writerNickname}</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;