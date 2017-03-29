import { Component, OnInit, OnChanges, Input, SimpleChanges} from '@angular/core';
import {PageTabComponent} from '../page-tab/page-tab.component';

@Component({
  selector: 'ah-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tabs: PageTabComponent[] = [];
  @Input() defaultPage;

  constructor() {
  }

  ngOnInit() {

  }

  addTab(tab: PageTabComponent) {
    if (tab.title === this.defaultPage) {
      tab.active = true;
    }
    this.tabs.push(tab);
  }

   selectTab(tab: PageTabComponent) {
    this.tabs.forEach((t) => {
      t.active = false;
    });
    tab.active = true;
  }

}
