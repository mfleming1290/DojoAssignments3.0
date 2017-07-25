import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class CommunicateService {

  observedUsers = new BehaviorSubject(null);
  constructor() {
    
   }

   updateUsers(users) {
      this.observedUsers.next(users)
   }

}
