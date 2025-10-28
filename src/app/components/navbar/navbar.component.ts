import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  host: {
    '[class.sidebar-collapsed]': 'sidebarCollapsed'
  }
})
export class NavbarComponent {
  @Input() sidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  currentPage = 'Dashboard';
  showNotifications = false;
  showUserMenu = false;

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
    this.showUserMenu = false;
  }

  toggleUserMenu() {
    this.showUserMenu = !this.showUserMenu;
    this.showNotifications = false;
  }
}
