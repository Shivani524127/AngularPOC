import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public snackBar: MatSnackBar) { }
  
  showError(message: string): void {
    this.snackBar.open(message);
  }
}
