import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabs = [
    {label:'One',content:'This is our first tab'},
    {label:'Two',content:'This is our second tab'},
    {label:'Three',content:'This is our Third tab'},
  ]

  pushTabs():void{
    this.tabs.push({label:"dynamicTab",content:"Dynamically generated tab"})
  }

  removeTab(index:number):void{
    this.tabs.splice(index)
    console.log(this.tabs);
  }
}
