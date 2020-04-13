export class LoggingService{
    logStatusChange(status: string){
        console.log('LoggingService - A server status changed, new status:' + status);
    }

    logMessage(name:string){
        console.log('New component '+ name +  ' is added');
    }
}