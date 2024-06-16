import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
// Import navigation data from navData file
import { navbarData } from './navData';

// Define an interface for the side navigation toggle event
export interface SideNavToggle {
  // The current screen width
  screenWidth: number;
  // Whether the side navigation is collapsed or not
  collapsed: boolean;
}

// Define the SidenavComponent
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  // An output event emitter to notify the parent component when the side navigation is toggled
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  
  // Whether the side navigation is collapsed or not
  collapsed = false;
  // The navigation data
  navData = navbarData;
  
  // The current screen width
  screenWidth = 0;

  // Lifecycle hook that is called when the component is initialized
  ngOnInit(): void {
    // Get the initial screen width
    this.screenWidth = window.innerWidth;
    // Emit the toggle event with the initial state
    this.onToggleSideNav.emit();
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update the screen width
    this.screenWidth = window.innerWidth;
    // If the screen width is less than or equal to 768, collapse the side navigation
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      // Emit the toggle event with the updated state
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    } else {
      // Emit the toggle event with the updated state
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    }
  }

  // Toggle the side navigation collapse state
  toggleCollapse(): void {
    // Toggle the collapsed state
    this.collapsed = !this.collapsed;
    // Emit the toggle event with the updated state
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    console.log(`Collapsed state changed to:${this.collapsed}`);
  }

  // Close the side navigation
  closeSidenav(): void {
    // Set the collapsed state to false
    this.collapsed = false;
    // Emit the toggle event with the updated state
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
    console.log("Side nav Closed");
  }
}
