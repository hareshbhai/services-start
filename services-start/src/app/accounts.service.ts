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

      addAccount(name: string, status: string) {
        console.log('component added :' + name + ' ' + status);
        this.accounts.push({name: name, status: status});
      }

      statusChange(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
      }
    
}