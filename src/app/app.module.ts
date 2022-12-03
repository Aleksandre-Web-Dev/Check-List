import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFormComponent } from './add-form/add-form.component';
import { CheckListItemComponent } from './check-list-item/check-list-item.component';
import { CompleteListComponent } from './complete-list/complete-list.component';

@NgModule({
  declarations: [AppComponent, AddFormComponent, CheckListItemComponent, CompleteListComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
