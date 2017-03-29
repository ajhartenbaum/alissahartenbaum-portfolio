import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'ah-page-tab',
  templateUrl: './page-tab.component.html',
  styleUrls: ['./page-tab.component.css']
})
export class PageTabComponent implements OnInit, OnChanges {
  @Input() tabTitle;
  @Input() default;
  active = false;
  title = this.tabTitle;
  parent: NavbarComponent;

  constructor(tabs: NavbarComponent) {
    this.parent = tabs;
    tabs.addTab(this);
  }

  ngOnInit() {
  }


  ngOnChanges(changes: SimpleChanges) {
    this.title = changes['tabTitle'].currentValue;
    if (this.title === 'Home') {
      this.parent.selectTab(this);
    }
  };

}
