import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : {name:string}, private dilaogRef : MatDialogRef<DialogComponent>) { }
  confirm : boolean = false;
  ngOnInit(): void {
  }

   /* setTimeout(() => {
  // This alone will not close the dialog because there is no reference to it.
}, 3000);          */
  confirmed():void{
    this.confirm = true;
    this.data.name = "Mayur";
    setTimeout(()=>{
      this.dilaogRef.close();
    },1000)
  }
  /* When is MatDialogRef Needed?
  How Does MatDialogRef Work?
When a dialog is opened using MatDialog.open(), Angular Material creates an instance of the dialog component
and provides a MatDialogRef for that instance. This MatDialogRef is injected into the dialog component
so you can interact with the open dialog
Dynamic Dialog Behavior: If the dialog needs to close programmatically based on user interaction or after a specific event.
Passing Data Back to the Parent Component: If you want to send data from the dialog to the parent component upon closing.             */

}
