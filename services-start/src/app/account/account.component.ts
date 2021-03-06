import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountServices } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  
  constructor(private loggingService : LoggingService, private accountService: AccountServices){
  }


  onSetTo(status: string) {    
    this.accountService.statusChange(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
