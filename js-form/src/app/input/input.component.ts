import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() control:any;
  @Input() label:string;
  @Input() type:string;

  constructor() { }

  ngOnInit(): void {
  }

  isinvalid() {
    return this.control.errors
  }
}
