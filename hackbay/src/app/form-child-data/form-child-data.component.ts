import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { inputDto } from '../models/inputDto';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-child-data',
  templateUrl: './form-child-data.component.html',
  styleUrls: ['./form-child-data.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, RouterModule]
})
export class FormChildDataComponent {

  input : inputDto = new inputDto();
}
