import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SongService } from 'src/shared/services/song.service';

@Component({
  selector: 'app-delete-song',
  templateUrl: './delete-song.component.html',
  styleUrls: ['./delete-song.component.css']
})
export class DeleteSongComponent {

  itemsToBeDeleted: Array<any> = [];

    constructor(public songService: SongService, private dialogRef: MatDialogRef<DeleteSongComponent>){
      this.itemsToBeDeleted = songService.itemsToBeDeleted;
      console.log(this.itemsToBeDeleted);
    }

    onConfirm(){
      console.log('confirmed');
      this.songService.deleteSongs();
      this.dialogRef.close();

      console.log(this.songService.songList.length);
    }

    findTitle(id: string){
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
