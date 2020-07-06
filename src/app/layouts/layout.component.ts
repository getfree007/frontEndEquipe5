import { Component, OnInit, AfterViewInit } from '@angular/core';


import {
  LAYOUT_VERTICAL,
} from './layouts.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {

  // layout related config
  layoutType: string;
  constructor() { }

  ngOnInit() {
    // default settings
    this.layoutType = LAYOUT_VERTICAL;
  }

  ngAfterViewInit() {
  }

  /**
   * Check if the vertical layout is requested
   */
  isVerticalLayoutRequested() {
    return this.layoutType === LAYOUT_VERTICAL;
  }
}
