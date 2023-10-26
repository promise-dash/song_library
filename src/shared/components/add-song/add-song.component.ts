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
export class AddSongComponent {

  addForm: FormGroup;
  
  newSong: Song;

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
