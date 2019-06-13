import { Component, OnInit } from "@angular/core";
import { extend } from "webdriver-js-extender";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  currentGeneration: Number[][];

  createArray(count: number) {
    return new Array(count);
  }

  ngOnInit() {
    this.currentGeneration = [];
  }

  selectCell(event) {
    const coordinates = (event.srcElement as Element).id
      .split(",")
      .map(this.convertToNumber);
    this.currentGeneration.push(coordinates);
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
