import { Component, OnInit, Input , EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() FirstName:string;
  @Input() LastName:string;
  @Input() Contact:number;
  @Input() ID:number;
  @Input() Email:string;

@Output()  string;
@Output()  number;


  constructor() { }

  ngOnInit() {
  }

  
}
