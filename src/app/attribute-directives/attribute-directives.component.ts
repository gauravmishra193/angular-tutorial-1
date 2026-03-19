import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.scss'
})
export class AttributeDirectivesComponent {
  styleVal : string = 'text-success'
  userClass: string = " "

  onClick(col: string) {
    this.styleVal = col;
  }
  
  onClick2() {
    this.styleVal = (this.styleVal==='text-success')? 'text-danger': 'text-success';
  }

}
