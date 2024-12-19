import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PaginateComponent } from './paginate/paginate.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CallDialogComponent } from './call-dialog/call-dialog.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DialogComponent,
    DynamicComponent,
    ParentComponent,
    ChildComponent,
    PaginateComponent,
    CallDialogComponent,
    TabsComponent
  ],
  entryComponents:[DialogComponent], // dialog component has to included here in entry components array
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
