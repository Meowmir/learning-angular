import { Component } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrl: "./servers.component.css",
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = "No server.";
  serverName = "Test";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
