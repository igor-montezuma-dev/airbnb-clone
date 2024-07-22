import { Component, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastService } from './../services/toast.service';
import { AvatarComponent } from './avatar/avatar.component';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonModule,
    FontAwesomeModule,
    ToolbarModule,
    MenuModule,
    CategoryComponent,
    AvatarComponent,
  ],
  providers: [DialogService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  location: string = 'Qualquer lugar';
  guests: string = 'Adicionar convidados';
  dates: string = 'Qualquer semana';

  private ToastService = inject(ToastService);

  currentMenuItems: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
    this.ToastService.send({ severity: 'info', summary: 'Bem vindo!'});
  }

  private fetchMenu() {
    return [
      {
        label: 'Cadastre-se',
        styleClass: 'font-bold',
      },
      {
        label: 'Entrar',
      },
    ];
  }

  // login() => this.authService.login();
  // logout() => this.authService.login();
}
