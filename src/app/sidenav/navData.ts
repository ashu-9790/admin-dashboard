// Import the RouterLink directive from Angular Router
import { RouterLink } from "@angular/router";

// Define the navigation data as an array of objects
export const navbarData = [
  {
    // The route link for the dashboard navigation item
    RouterLink: "dashboard",
    icon: "bi bi-house",
    label: "Dashboard"
  },
  {
    // The route link for the information navigation item
    RouterLink: "information",
    icon: "bi bi-info-square",
    label: "Information"
  },
];