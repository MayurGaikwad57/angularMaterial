import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-call-dialog',
  templateUrl: './call-dialog.component.html',
  styleUrls: ['./call-dialog.component.css']
})
export class CallDialogComponent implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog(): void{
   const dialogRef = this.dialog.open(DialogComponent,{
    width:'250px',
    data:{
       name:'Mayur'
   }});
   dialogRef.afterClosed().subscribe((result) => {
    console.log(`The dialog box is closed Successfully ${result}`)
   })
  }
}
