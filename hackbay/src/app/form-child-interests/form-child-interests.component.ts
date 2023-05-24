import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-child-interests',
  templateUrl: './form-child-interests.component.html',
  styleUrls: ['./form-child-interests.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class FormChildInterestsComponent {

}
