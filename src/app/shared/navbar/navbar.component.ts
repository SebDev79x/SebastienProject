import { Component, OnInit } from '@angular/core';
import { CheckRouteService } from 'src/app/_services/check-route.service';
import { LinksService } from 'src/app/_services/links.service';
import { IMenu } from '../../_interfaces/menu';
import { links } from '../../_miscData/links';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links!: IMenu[];
  public currentRoute!: any;

  constructor(private linksService: LinksService, private checkRouteService: CheckRouteService) {

  }
  ngOnInit(): void {

    this.checkRouteService.getUrl().subscribe((data: any) => {
      this.currentRoute = data.url.replace('/', '').toUpperCase()
      /* if (this.currentRoute == 'ADMIN') {
        this.links = this.linksService.getAdminLinks()
        console.log("this.links)", this.links);
        console.log("this.currentRoute", this.currentRoute);

      }else{
        this.links = this.linksService.getPublicLinks()
      }
     /*   if (this.currentRoute == 'PUBLIC') {
          this.links = this.linksService.getPublicLinks()
          console.log(this.links);

        }
      console.log("this.links)", this.links);
      return this.links */
    })
  }

}

