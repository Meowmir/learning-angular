import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {LoggingService} from "../shared/logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  private loggingService?: LoggingService

  constructor() {
    this.loggingService = inject(LoggingService)
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.loggingService.logStatusChange(status)
  }
}
