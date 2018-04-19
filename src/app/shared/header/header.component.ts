import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@Output() outputValue = new EventEmitter();

  searchInput: String = "";

  constructor() { }

  ngOnInit() {

    this.outputValue.emit(this.searchInput);

  }

}
