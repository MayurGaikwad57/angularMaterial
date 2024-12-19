import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
 length:number = 100;
 previousPageSize : number = 5;
 pageSize:number = 5;
 pageNumber:number = 1;
 pageSizeOptions:number[] = [5,10,15,20];
 showFirstLastButtons : boolean = true;
 currentPage:number = 1;
//  @ViewChild('MatPaginator') paginator!: MatPaginator;
  constructor() { }
// onPageChange(event:PageEvent) {
//     this.pageSize = event.pageSize;
//     this.pageNumber = event.pageIndex+1;
//     if(this.previousPageSize !== this.pageSize) {
//       this.pageNumber = 1;
//       this.previousPageSize = this.pageSize;
//       this.paginator.firstPage();
//     }
// }
  ngOnInit(): void {
  }
}

