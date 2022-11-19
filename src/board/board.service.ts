import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
// import { CreateBoardDto } from './dto/create-board.dto';
// import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  createBoard(title: string, description: string) {
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getAllBoards(): Board[] {
    return this.boards;
  }

  findOne(id: number) {
    return `This action returns a #${id} board`;
  }

  updateBoard() {
    return;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }
}
