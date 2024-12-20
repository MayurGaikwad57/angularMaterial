import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
@ViewChild("childRef") container: any = ChildComponent;
  constructor() { }
 
  ngOnInit(): void {
  }
  inc() {
    this.container.Increment();
  }
  dec() {
    this.container.Decrement();
  }

}
