import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardComponent } from "./board.component";

describe("BoardComponent", () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    component.currentGeneration = [];
    component.bounds = [10, 10];
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should emit cellSelectinOutput event when a cell is clicked", () => {
    spyOn(component.cellSelectionOutput, "emit");
    const cell = fixture.debugElement.nativeElement.querySelector("[id='1,2']");
    cell.click();
    expect(component.cellSelectionOutput.emit).toHaveBeenCalledWith([1, 2]);
  });
});
