import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getBoardList } from '@/entities/board/api.ts';
import { ApiResponse, ErrorResponse } from '@/shared/types/api.ts';
import { BoardListResponse } from '@/entities/board/types.ts';
import { AxiosError } from 'axios';
import BoardCard from '@/features/home/boardList/ui/BoardCard.tsx';

const BoardListFeature = () => {
  const [offset, setOffset] = useState(0);

  const { data: boardList, isPending } = useQuery<ApiResponse<BoardListResponse>, AxiosError<ErrorResponse>>({
    queryKey: ['boardList', offset],
    queryFn: () => getBoardList(offset, 10),
    staleTime: 1000 * 60 * 5,  // 5분 캐싱
    retry: 3,
  });

  if (isPending || !boardList) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex flex-col gap-12">
        {boardList.data.map((board) => (
          <BoardCard key={board.boardId} board={board} />
        ))}
      </div>
    </div>
  );
};

export default BoardListFeature;