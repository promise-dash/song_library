import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Song } from 'src/shared/models/Song';
import { SongService } from 'src/shared/services/song.service';

@Component({
  selector: 'app-delete-song',
  templateUrl: './delete-song.component.html',
  styleUrls: ['./delete-song.component.css']
})

/**

Component for deleting songs from the library
@class */ 
export class DeleteSongComponent {

/**

The array of items (song IDs) to be deleted
@type {Array} */
  itemsToBeDeleted: Array<string> = [];

/**

Constructs the DeleteSongComponent
@constructor
@param {SongService} songService The song service
@param {MatDialogRef} dialogRef The dialog reference */

    constructor(public songService: SongService, private dialogRef: MatDialogRef<DeleteSongComponent>){
      this.itemsToBeDeleted = songService.itemsToBeDeleted;
      console.log(this.itemsToBeDeleted);
    }

/**

Deletes the selected songs and closes the dialog. */
    onConfirm(){
      console.log('confirmed');
      this.songService.deleteSongs();
      this.dialogRef.close();

      console.log(this.songService.songList.length);
    }

/**

Finds the song title for the given ID by searching the songList in the song service.
@param {string} id The ID of the song
@returns {string} The song title or "No title" */
    findTitle(id: string): string{
      console.log('finding song name');
      const song = this.songService.songList.find((song)=>{
        return song.id === id
      });

      if(song)
      {
        return song.songName;
      }
      return "No title"
    }
}
