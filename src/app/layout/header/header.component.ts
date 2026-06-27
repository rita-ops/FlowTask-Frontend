import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() currentUser: any;
  @Input() projectNotifications: any[] = [];
  @Input() isAdmin = false;

  @Output() logoutClick = new EventEmitter<void>();
  @Output() showProjectsClick = new EventEmitter<void>();
  @Output() showAdminClick = new EventEmitter<void>();
  @Output() openProjectClick = new EventEmitter<number>();
  @Output() loginClick = new EventEmitter<void>();

  notificationClass(days: number): string {
    if (days <= 7) return 'notif-red';
    if (days <= 30) return 'notif-yellow';
    return 'notif-blue';
  }

  notificationIcon(days: number): string {
    if (days <= 0) return 'fa-solid fa-circle';
    if (days <= 7) return 'fa-solid fa-triangle-exclamation';
    return 'fa-solid fa-calendar-days';
  }
}