import { LocalStorageService } from './../storage/local-storage.service';
import { Router } from '@angular/router';
import { ToastService } from '../alert/toast.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private toast: ToastService,
    private localStorageService: LocalStorageService
  ) {}

  login(user: any) {
    this.toast.simpleSuccessToast('success', 'Connexion réussie');
    this.router.navigate(['/dashboard']);
  }
}
