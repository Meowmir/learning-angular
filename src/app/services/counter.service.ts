import {Injectable} from "@angular/core";

@Injectable()
export class CounterService {
  activeToInactiveCounter = 0
  inactiveToActiveCounter = 0

  incrementActiveToInactive() {
    this.activeToInactiveCounter++
    console.log('Added to Inactive: ' + this.activeToInactiveCounter)
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++
    console.log('Added to Active: ' + this.inactiveToActiveCounter)
  }
}
