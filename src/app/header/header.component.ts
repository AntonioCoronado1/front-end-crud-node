import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Usuario/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
  }
  isAuthenticated(): boolean {
    return this.authService.isLogged();
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
