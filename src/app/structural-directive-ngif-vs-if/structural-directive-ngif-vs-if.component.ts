import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngif-vs-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-ngif-vs-if.component.html',
  styleUrl: './structural-directive-ngif-vs-if.component.scss'
})
export class StructuralDirectiveNgifVsIfComponent {
  isChecked : boolean = false;
  text1 : string = ""
  text2 : string = ""
  isCopied : boolean = false

  result : string = "same texts"

  toggleChecked() {
    this.isChecked = !this.isChecked;
  }

  checkSame() {
    if(this.text1 === this.text2) {
      this.result = "same texts";
    }
    else 
        this.result = "different!"
  }

  analyseCopy() {
    this.isCopied = true;
    if(this.isCopied) 
      alert("you can not copy this text")
    this.isCopied = false;
  }

}
