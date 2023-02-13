import { Component } from '@angular/core';
import { LinksService } from 'src/app/_services/links.service';
import { IToggle } from '../../_interfaces/toggle';
import { CheckScreenSizeService } from '../../_services/check-screen-size.service';
@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {

  public isSNCollapsed = false;
  public screenWidth = 0;
  public size = '';
  public width = 0;

  constructor(private css: CheckScreenSizeService) {
    this.css.resize$.subscribe((data) => {
      this.size = data.size
      this.width = data.width
    })

  }
  onToggleSN(data: IToggle): void {
    this.isSNCollapsed = data.collapsed
    this.screenWidth = data.screenWidth
  }
}

