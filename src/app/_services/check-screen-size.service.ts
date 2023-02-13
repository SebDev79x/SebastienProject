import { Injectable } from '@angular/core';
import {fromEvent} from 'rxjs'
import {map,debounceTime,distinctUntilChanged,startWith,tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CheckScreenSizeService {
  resize$=fromEvent(window,'resize').pipe(
    startWith(null),
    debounceTime(100),
    map(_=>{
     if ((window.innerWidth)<576) return 'xs'
    if ((window.innerWidth)>=577 && (window.innerWidth)<768) return 'sm'
    if ((window.innerWidth)>=769 && (window.innerWidth)<992) return 'md'
    if ((window.innerWidth)>= 993 && (window.innerWidth)<1200) return 'lg'
    if ((window.innerWidth)>=1201) return 'xl'
    return 'xxl'
  }),
  distinctUntilChanged(),
  map(x=>({size:x,width:window.innerWidth})),
  tap(res=>res)
  )
  constructor() { }
}
