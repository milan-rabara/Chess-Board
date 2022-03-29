import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss']
})
export class ChessBoardComponent implements OnInit {
  chessBoardNumber = [1].fill(0);
  constructor() { }

  ngOnInit(): void {
    this.chessBoardNumber.length = 8;
  }

}
