import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { AddSongComponent } from 'src/shared/components/add-song/add-song.component';
import { DeleteSongComponent } from 'src/shared/components/delete-song/delete-song.component';
import { SongService } from 'src/shared/services/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'song-library';

  myForm: FormGroup;

  songsPerPage: number = 10;
  pageIdx: number = 0;
  sortAttribute = 'null';
  itemsToBeDeleted: Array<string> = [];

  constructor(private fb: FormBuilder, public songService: SongService, private dialog: MatDialog){

    this.myForm = this.fb.group({ 
      songName: this.fb.control(''),
      artistName: this.fb.control(''),
    });

    this.myForm.valueChanges.subscribe(value => {
      const songName = value.songName.toLowerCase();
      const artistName = value.artistName.toLowerCase();
      songService.search(songName, artistName);
    });
  
  } 

  onPageSizeChange(event: PageEvent): void {
    this.pageIdx = event.pageIndex;
    this.songsPerPage = event.pageSize;

  }

  sortBy(attribute: string): void {
    this.songService.sort(attribute);
  }

  handleCheck(event: any, id: string): void{
    if(event.target.checked){
      this.songService.itemsToBeDeleted.push(id);
    }
    else{
      const idx = this.songService.itemsToBeDeleted.indexOf(id);
      this.songService.itemsToBeDeleted.splice(idx, 1);
    }
  }


  openDialog(attribute: string){
    if(attribute == 'add'){
      this.dialog.open(AddSongComponent);
    }
    else{
      if(this.songService.itemsToBeDeleted.length <= 5){
        this.dialog.open(DeleteSongComponent);
        // this.songService.storeItemsToBeDeleted(this.itemsToBeDeleted);
        console.log('itesToBeDeleted has been stored in the service');
      }
      else{
        alert('You can delete only 5 items at once');
      }
    }
  }
}
