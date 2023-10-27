import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Song } from 'src/shared/models/Song';
import { SongService } from 'src/shared/services/song.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})

/**

Component for adding a new song to the library
@class */
export class AddSongComponent {

/**

The form group for adding a new song
@type {FormGroup} */ addForm: FormGroup;
  
/**

The new song object to be added
@type {Song} */newSong: Song;

/**

Constructs the AddSongComponent
@constructor
@param {FormBuilder} fb The form builder service
@param {SongService} songService The song service
@param {MatDialogRef} dialogRef The dialog reference */
  constructor(private fb: FormBuilder, private songService: SongService, private dialogRef: MatDialogRef<AddSongComponent>){
    this.addForm = this.fb.group({ 
      songName: '',
      artistName: '',
      releaseYear: '',
      durationInSeconds: '',
      numberOfStreams: '',
    });

    this.addForm.valueChanges.subscribe(value => {
      this.newSong = value;
    });
  }

/**

Handles form submission and adds the new song to the library if it is valid. */
  onSubmit(){

    if(this.newSong){
      this.songService.addNewSong(this.newSong);
      this.dialogRef.close();
    }
    else{
      alert('Write the song and the artist name')
    }
      
  }
}
