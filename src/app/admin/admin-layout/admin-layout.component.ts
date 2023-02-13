import { Component } from '@angular/core';
import { CheckScreenSizeService } from 'src/app/_services/check-screen-size.service';
import { IToggle } from '../../_interfaces/toggle';
@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
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
