import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { NotificationService} from './notification.service';
 
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
 
    constructor(private injector: Injector) { }
 
    handleError(error: Error) {
        const notifier = this.injector.get(NotificationService);
        const err = error.message.toString();
        notifier.showError(err);
  
}
}