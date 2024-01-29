import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { AlertsComponent } from "./alerts/alerts.component";
import { WarningAlertComponent } from "./alerts/warning/warning.alert.component";
import { SuccessAlertComponent } from "./alerts/success/success.alert.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
