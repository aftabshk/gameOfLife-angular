import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { By } from "@angular/platform-browser";
import { timeout } from "q";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BoardComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should call nextGeneration function onClick", done => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, "evolve");
    const startButton = fixture.debugElement.nativeElement.querySelector(
      ".start-button"
    );
    const originalSetInterval = window.setInterval;
    window.setInterval = callBack => {
      callBack();
      return 0;
    };
    startButton.click();
    expect(app.evolve).toHaveBeenCalled();
    window.setInterval = originalSetInterval;
    done();
  });
});
