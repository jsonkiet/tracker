import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule} from '@angular/material';

const COMPS = [MatCardModule, MatButtonModule];

@NgModule({
  imports: [
    COMPS,
  ],
  exports: COMPS
})
export class MaterialModule { }
