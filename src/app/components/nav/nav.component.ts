import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['chamados/update/1'])
  }

  logout(){
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout Realizado Com Sucesso!', 'Logout', { timeOut: 7000 });
  }

}
