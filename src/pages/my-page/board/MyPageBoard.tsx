import { Text } from '@/components/text';
import { useBoardListMineQuery } from '@/hooks/board';
import { InfinityList, InfinityListWrapper } from '@/components/infinity-list';
import { AxiosResponse } from 'axios';
import { ResConfig } from '@/types/res.config';
import { IBoardListRes } from '@/types/res/board';
import { IBoard } from '@/types/interface';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

export const MyPageBoard = () => {
  const navigate = useNavigate();
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useBoardListMineQuery();

  const onClickHandler = (params: { event: React.MouseEvent<HTMLDivElement, MouseEvent>; boardSeq: number }) => {
    const { event, boardSeq } = params;

    event.stopPropagation();

    navigate(`/board/detail/${boardSeq}`);
  };

  const renderItem = (page: AxiosResponse<ResConfig<IBoardListRes>, any>) => {
    const { boards } = page.data.data;

    return boards.map((board: IBoard) => (
      <div
        key={board.boardSeq}
        className="w-full flex flex-col gap-1 cursor-pointer"
        onClick={(event) => onClickHandler({ event, boardSeq: board.boardSeq })}>
        <div className="flex gap-1">
          <Text value="게시글 타이틀: " color="#000000" />
          <Text className="font-bold" value={board.title} color="#000000" />
        </div>

        <div className="flex gap-1">
          <Text value="게시글 내용: " color="#000000" />
          <Text className="col-span-5 line-clamp-2" value={board.content} color="#000000" />
        </div>

        <Text
          className="col-span-5 line-clamp-2"
          value={dayjs(board.createdAt).format('YY-MM-DD HH:mm')}
          color="#000000"
        />
      </div>
    ));
  };

  return (
    <InfinityListWrapper
      total={data?.[0].data.data.total}
      renderList={
        <InfinityList<AxiosResponse<ResConfig<IBoardListRes>, any>>
          data={data || []}
          renderItem={renderItem}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      }
    />
  );
};
