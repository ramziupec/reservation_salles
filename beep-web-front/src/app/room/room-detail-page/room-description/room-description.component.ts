import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-description',
  templateUrl: './room-description.component.html',
  styleUrls: ['./room-description.component.scss']
})
export class RoomDescriptionComponent implements OnInit {
  @Input() description;
  constructor() { }

  ngOnInit() {
  }

}
