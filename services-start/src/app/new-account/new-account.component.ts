import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  constructor(private logginService: LoggingService, private accountsService: AccountServices){ 
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New status is: '+ status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
