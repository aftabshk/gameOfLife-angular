import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.less"]
})
export class BoardComponent implements OnInit {
  @Input()
  currentGeneration: Number[][];
  @Input()
  bounds: Number[];
  @Output()
  cellSelectionOutput: EventEmitter<Number[]> = new EventEmitter();

  createArray(count: number) {
    return new Array(count);
  }

  ngOnInit() {}

  selectCell(event) {
    const coordinates = (event.srcElement as Element).id
      .split(",")
      .map(this.convertToNumber);
    this.cellSelectionOutput.emit(coordinates);
  }

  isAlive(row, column) {
    return this.currentGeneration.some(
      coordinate => coordinate[0] === +row && coordinate[1] === +column
    );
  }

  private convertToNumber(value: string): Number {
    return +value;
  }
}
