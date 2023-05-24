import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-child-data',
  templateUrl: './form-child-data.component.html',
  styleUrls: ['./form-child-data.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class FormChildDataComponent {

}
