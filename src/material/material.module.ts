import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    MatFormFieldModule, 
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class MaterialModule { }
