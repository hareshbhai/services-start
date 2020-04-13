import { LoggingService } from "./logging.service";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class AccountServices{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      constructor(private loggingService: LoggingService){ }

      addAccount(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logMessage(name);
      }

      statusChange(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus);
      }
    
}