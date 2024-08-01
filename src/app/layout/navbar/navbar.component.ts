import { Component, effect, inject, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { AuthService } from '../../core/auth/auth.service';
import { User } from '../../core/model/user.model';
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
  protected authService: AuthService = inject(AuthService);

  login = () => this.authService.login();
  logout = () => this.authService.logout();

  currentMenuItems: MenuItem[] | undefined = [];
  protected connectedUser: User = { email: this.authService.notConnected };

  constructor() {
    effect(() => {
      if (this.authService.fetchUser().status === 'OK') {
        this.connectedUser = this.authService.fetchUser().value!;
        this.currentMenuItems = this.fetchMenu();
      }
    });
  }

  ngOnInit(): void {
    this.authService.fetch(false);
    //this.currentMenuItems = this.fetchMenu();
    //this.ToastService.send({ severity: 'info', summary: 'Bem vindo!' });
  }

  private fetchMenu(): MenuItem[] {
    if (this.authService.isAuthenticated()) {

      return [
        {
          label: 'Minhas propriedades',
          routerLink: "landlord/properties",
          visible: this.hasToBeLandlord(),
        },
        {
          label: 'Minhas buscas',
          routerLink: "booking",

        },
        {
          label: 'Minhas reservas',
          routerLink: "landlord/reservation",
          visible: this.hasToBeLandlord(),
        },
        {
          label: 'Sair',
          command: () => this.logout(),
        }
      ]
    }else{
      return [
        {
          label: 'Cadastre-se',
          styleClass: 'font-bold',
          command: () => this.login(),
        },
        {
          label: 'Entrar',
          command: () => this.login()
        },
      ]
    }

  }

  hasToBeLandlord(): boolean {
    return this.authService.hasAnyAuthority("ROLE_LANDLORD");
  }

  // login() => this.authService.login();

}
