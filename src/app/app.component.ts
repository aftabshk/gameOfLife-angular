import { Component, OnInit } from "@angular/core";
import { nextGeneration } from "../lib/gameOfLife";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent implements OnInit {
  currentGeneration: Number[][];
  bounds: Number[];

  ngOnInit() {
    this.currentGeneration = [];
    this.bounds = [10, 10];
  }

  cellClicked(event) {
    this.currentGeneration.push(event);
  }

  startGame() {
    setInterval(() => this.evolve(), 1000);
  }

  evolve() {
    this.currentGeneration = nextGeneration(this.currentGeneration, {
      bottomRight: this.bounds,
      topLeft: [0, 0]
    });
  }
}
