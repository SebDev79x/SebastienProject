import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ICredentials } from 'src/app/_interfaces/credentials';
import { IToken } from 'src/app/_interfaces/token';
import { TokenService } from 'src/app/_services/token.service';
import { LogService } from 'src/app/_services/log.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: ICredentials = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private logService: LogService) {
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  onSubmit() {
    this.authService.login(this.form).subscribe((data) => {
      console.log("data dans login",data);

      this.tokenService.saveToken(data.access_token)
      console.log(data.message);
    })
  }
}
