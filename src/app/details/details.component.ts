import { Component } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.css",
})
export class DetailsComponent {
  toggleSecret = false;
  loggedClicks = [];

  onToggle() {
    this.toggleSecret = !this.toggleSecret;
    this.loggedClicks.push(this.loggedClicks.length + 1);
  }
}
