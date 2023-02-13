import { Injectable } from '@angular/core';
import { links } from '../_miscData/links'
import { IMenu } from '../_interfaces/menu';
@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public links: IMenu[] = links
  constructor() { }
  getLinks(param: string) {
    return this.links.filter((element: any) => {
      return element.type == param
    })
  }
}
