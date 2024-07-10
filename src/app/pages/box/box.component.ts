import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css',
})
export class BoxComponent {
  // idBox: User | undefined;
  // nombre: string | any = '';
  // constructor(public authService: AuthService) {}
  // ngOnInit(): void {
  //   if (this.authService.getIdBox()) {
  //     this.idBox = this.authService.getIdBox();
  //   }
  // }
}
