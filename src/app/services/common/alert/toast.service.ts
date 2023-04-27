import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  simpleSuccessToast(type: string, summary: string) {
    this.messageService.add({
      severity: type,
      summary: summary,
    });
  }

  advancedSuccessToast(type: string, summary: string, detail: string) {
    this.messageService.add({
      severity: type,
      summary: summary,
      detail: detail,
    });
  }
}
