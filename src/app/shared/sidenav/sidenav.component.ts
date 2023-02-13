import { Component, OnInit, Output, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { IMenu } from '../../_interfaces/menu';
import { IToggle } from '../../_interfaces/toggle';
/* import { links } from '../../_miscData/links';
 */import { trigger, transition, keyframes, animate, style } from '@angular/animations';
import { LinksService } from 'src/app/_services/links.service';
import { CheckRouteService } from 'src/app/_services/check-route.service';
import { BehaviorSubject, Subject, Observable, Subscription } from 'rxjs';
import { links } from '../../admin/links'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {
  public currentRoute = new BehaviorSubject('');

  public links!: any /* new BehaviorSubject<IMenu[]>([]); */
  public linksToDisplay = new BehaviorSubject<IMenu[]>([]);
  public linksToDisplay$ = this.linksToDisplay.asObservable();


  @Output() onToggleSN: EventEmitter<IToggle> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;


  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.screenWidth = window.innerWidth
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSN.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
    }
  }
  constructor(private linksService: LinksService, private checkRouteService: CheckRouteService) {
    this.checkRouteService.getUrl().subscribe((element: any) => {
      let route = element.url.replace('/', '')
      this.currentRoute.next(route)
      let routeValue = this.linksService.getLinks(this.currentRoute.value)
      this.linksToDisplay.next(routeValue)
      this.linksToDisplay$.subscribe((data: any) => {
        this.links = data
      })
      this.linksToDisplay.complete()
    })
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth

  }
  ngOnDestroy(): void {
  }
  onToggleSNEmitsNewProps() {
    this.onToggleSN.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  toggleSN(): void {
    this.collapsed = !this.collapsed
    this.onToggleSNEmitsNewProps()
  }
  closeSN(): void {
    if (this.collapsed) {
      this.collapsed = false
    }
    this.onToggleSNEmitsNewProps()
  }
  onMouseLeave() {
    this.collapsed = false
  }
}
