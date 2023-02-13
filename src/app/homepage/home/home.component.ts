import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { CheckRouteService } from 'src/app/_services/check-route.service';
import { CheckScreenSizeService } from 'src/app/_services/check-screen-size.service';
import { LogService } from 'src/app/_services/log.service';
import { TokenService } from 'src/app/_services/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentRoute: string = '';
  public route?: Subscription;
  public size?: Subscription;
  public currentSize: string = '';
  public userIsLogged = false
public test? : string | null
  public buttonIsVisible : any = false;
  constructor(
    private checkRS: CheckRouteService,
    private checkSSS: CheckScreenSizeService,
    private tokenService: TokenService, private logService : LogService) {


  }
  ngOnInit(): void {
    this.route = this.checkRS.getUrl().subscribe((data: any) => {
      this.currentRoute = data.url.replace('/', '')
    })
    this.size = this.checkSSS.resize$.subscribe((data: any) => {
      this.currentSize = data.size
    })
    console.log("token service",this.tokenService.tokenExists());

 /*  this.logService.isUserLogged$.subscribe((data:any)=>{
      console.log("data", data)
    }) */

    /* this.buttonIsVisible = this.logService.isUserLogged$.subscribe((data:any)=>{
      console.log("data");

      this.test = localStorage.getItem('token')
      this.userIsLogged = data}) */

   /*  this.buttonIsVisible = this.logService.isUserLogged$.subscribe((data:any)=>{
      this.userIsLogged = data
    }) */


  }
  ngOnDestroy(): void {
    //Unsubscription to avoid memory leaks
    if (this.route) this.route.unsubscribe()
    if (this.size) this.size.unsubscribe()
/*     if (this.buttonIsVisible) this.buttonIsVisible.unsubscribe()
 */  }
  logOut(): void {
    this.tokenService.clearToken()
  }
}
