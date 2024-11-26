export class EventStore {
    constructor() {
      this.eventList = [];
    }
  
    addEvent(event) {
      this.eventList.push(event);
    }
  }