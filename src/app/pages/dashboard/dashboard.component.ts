import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DashboardStats {
  total: number;
  pending: number;
  approved: number;
  rejected: number;
}

interface RecentRequest {
  id: string;
  userName: string;
  userEmail: string;
  userInitials: string;
  accessType: string;
  status: string;
  date: string;
}

interface Activity {
  title: string;
  description: string;
  time: string;
  type: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  stats: DashboardStats = {
    total: 156,
    pending: 24,
    approved: 118,
    rejected: 14
  };

  recentRequests: RecentRequest[] = [
    {
      id: '1234',
      userName: 'Anna Kowalska',
      userEmail: 'anna.kowalska@firma.pl',
      userInitials: 'AK',
      accessType: 'Database Access',
      status: 'Pending',
      date: '2025-10-27'
    },
    {
      id: '1233',
      userName: 'Jan Nowak',
      userEmail: 'jan.nowak@firma.pl',
      userInitials: 'JN',
      accessType: 'VPN Access',
      status: 'Approved',
      date: '2025-10-26'
    },
    {
      id: '1232',
      userName: 'Maria Wiśniewska',
      userEmail: 'maria.wisniewska@firma.pl',
      userInitials: 'MW',
      accessType: 'Admin Panel',
      status: 'In-Progress',
      date: '2025-10-26'
    },
    {
      id: '1231',
      userName: 'Piotr Lewandowski',
      userEmail: 'piotr.lewandowski@firma.pl',
      userInitials: 'PL',
      accessType: 'File Server',
      status: 'Approved',
      date: '2025-10-25'
    },
    {
      id: '1230',
      userName: 'Ewa Dąbrowska',
      userEmail: 'ewa.dabrowska@firma.pl',
      userInitials: 'ED',
      accessType: 'CRM System',
      status: 'Rejected',
      date: '2025-10-25'
    }
  ];

  activities: Activity[] = [
    {
      title: 'Request #1234 submitted',
      description: 'Anna Kowalska submitted a new access request for Database Access',
      time: '2 minutes ago',
      type: 'primary'
    },
    {
      title: 'Request #1233 approved',
      description: 'Jan Nowak\'s VPN Access request was approved by Admin',
      time: '1 hour ago',
      type: 'success'
    },
    {
      title: 'Request #1232 in review',
      description: 'Maria Wiśniewska\'s Admin Panel request is being reviewed',
      time: '2 hours ago',
      type: 'info'
    },
    {
      title: 'Request #1231 approved',
      description: 'Piotr Lewandowski\'s File Server request was approved',
      time: '1 day ago',
      type: 'success'
    },
    {
      title: 'Request #1230 rejected',
      description: 'Ewa Dąbrowska\'s CRM System request was rejected - insufficient permissions',
      time: '1 day ago',
      type: 'danger'
    }
  ];
}
