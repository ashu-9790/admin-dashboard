import { Component, OnInit } from '@angular/core';
import { SidenavService } from './body/body.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected this line
})
export class AppComponent {
  isSideNavCollapsed = false;
  screenWidth = window.innerWidth;
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
