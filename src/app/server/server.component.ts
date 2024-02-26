import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [``],
})
export class ServerComponent {
  serverId = 14;
  serverStatus = "offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }
}
