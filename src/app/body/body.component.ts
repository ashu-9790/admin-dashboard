// Import necessary modules from Angular Core
import { Component, Input } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
// Define the BodyComponent

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})

export class BodyComponent {
  // Input property to receive the collapsed state from the parent component
  @Input() collapsed = false;
  @Input() isSideNavCollapsed = false;
  // Input property to receive the screen width from the parent component
  @Input() screenWidth = 0;
  // @Input() isSideNavCollapsed = false;
  // Method to get the dynamic class for the body element
  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0 && styleClass === 'body-trimmed'){
      styleClass = 'body-trimmed-medium';
    }
    console.log(`Class is:${styleClass}`)
    return styleClass;
  }
  
  // getBodyClass(): string {
  //   console.log(`in body${this.collapsed}`);
  //   // Initialize an empty string for the style class
  //   let styleClass = '';
    
  //   // Check if the side navigation is collapsed and the screen width is greater than 768
  //   if (this.collapsed && this.screenWidth > 768) {
  //     // Set the style class to 'body-trimmed'
  //     styleClass = 'body-trimmed';
  //   } 
  //   // Check if the side navigation is collapsed and the screen width is less than or equal to 768 and greater than 0
  //   else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
  //     // Set the style class to 'body-md-screen'
  //     styleClass = 'body-md-screen';
  //   }
    
  //   console.log(`${styleClass}`);
  //   // Return the style class
  //   return styleClass;
  // }
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
