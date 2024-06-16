// sidenav.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  isSideNavCollapsed = false;
  screenWidth = 0;
}