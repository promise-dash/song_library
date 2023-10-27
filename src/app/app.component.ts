import { Component } from '@angular/core';
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
  /**
The root component of the application
@class / export class AppComponent { /*
The title of the application
@type {string} */
  title = 'song-library';

  /**
The form group used for searching songs
@type {FormGroup} */ myForm: FormGroup;

/**
The number of songs displayed per page
@type {number} */ songsPerPage = 10;

  /**
The current page index
@type {number} */ pageIdx = 0;

/**
The attribute used for sorting songs
@type {string} */sortAttribute = 'null';

/**

The array containing the IDs of songs to be deleted
@type {Array} */ itemsToBeDeleted: Array<string> = [];


/**

Constructs the AppComponent
@constructor
@param {FormBuilder} fb The form builder service
@param {SongService} songService The song service
@param {MatDialog} dialog The dialog service */

  constructor(private fb: FormBuilder, public songService: SongService, private dialog: MatDialog){
    // initialize the form group
    this.myForm = this.fb.group({ 
      songName: this.fb.control(''),
      artistName: this.fb.control(''),
    });

    
// subscribe to form value changes to update the song search results
    this.myForm.valueChanges.subscribe(value => {
      const songName = value.songName.toLowerCase();
      const artistName = value.artistName.toLowerCase();
      songService.search(songName, artistName);
    });
  
  } 


/**
Handles the page size change event and updates the current page index and
songs per page accordingly.
@param {PageEvent} event The PageEvent object 
*/
  onPageSizeChange(event: PageEvent): void {
    this.pageIdx = event.pageIndex;
    this.songsPerPage = event.pageSize;

  }

/**
Sorts the songs based on the given attribute.
@param {string} attribute The attribute to sort by */
  sortBy(attribute: string): void {
    this.songService.sort(attribute);
  }

  /**

Handles the check event and updates the itemsToBeDeleted array
accordingly.
@param {any} event The check event
@param {string} id The ID of the song */
  handleCheck(event: any, id: string): void{
    if(event.target.checked){
      this.songService.itemsToBeDeleted.push(id);
    }
    else{
      const idx = this.songService.itemsToBeDeleted.indexOf(id);
      this.songService.itemsToBeDeleted.splice(idx, 1);
    }
  }

/**

Opens the add song or delete song dialog depending on the attribute.
@param {string} attribute The attribute (add or delete) */
  openDialog(attribute: string){
    if(attribute == 'add'){
      this.dialog.open(AddSongComponent);
    }
    else{
      if(this.songService.itemsToBeDeleted.length <= 5){
        this.dialog.open(DeleteSongComponent);
        // this.songService.storeItemsToBeDeleted(this.itemsToBeDeleted);
        console.log('itemsToBeDeleted has been stored in the service');
      }
      else{
        alert('You can delete only 5 items at once');
      }
    }
  }
}

