import { Injectable } from '@angular/core';
import { Router, RouterEvent, Event } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CheckRouteService {
  constructor(private router: Router) {}
  /** GET URL */
  getUrl(): any {
    return this.router.events.pipe(
        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
      )
  }
}
