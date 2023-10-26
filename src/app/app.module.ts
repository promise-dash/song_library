import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSongComponent } from '../shared/components/add-song/add-song.component';
import { DeleteSongComponent } from '../shared/components/delete-song/delete-song.component';


@NgModule({
  declarations: [ 
    AppComponent, AddSongComponent, DeleteSongComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
