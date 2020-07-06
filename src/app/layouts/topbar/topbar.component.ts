import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  configData;

  constructor(@Inject(DOCUMENT) private document: any, private router: Router, private userService: UserService) {
    ;
   }

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3
    };
  }

  /**
   * Toggles the right sidebar
   */
  toggleRightSidebar() {
    this.settingsButtonClicked.emit();
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {
    this.userService.logout();
    this.router.navigate(['/account/login']);
}
gotoProfile()
{
  this.router.navigate(['/profile']);
}


}
