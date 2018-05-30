import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nametag',
  templateUrl: './nametag.component.html',
  styleUrls: ['./nametag.component.css']
})
export class NametagComponent implements OnInit {
 @Input() name:string;
  constructor() { }

  ngOnInit() {
  }

}
