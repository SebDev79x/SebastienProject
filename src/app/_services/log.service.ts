import { Injectable } from '@angular/core'; import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public isUserLogged = new BehaviorSubject<boolean>(false);
  public isUserLogged$ = this.isUserLogged.asObservable();

  getStateButtonLog() {

    return this.isUserLogged$.subscribe(this.isUserLogged)
  }
  setStateButtonLog(value: boolean) {
     this.isUserLogged.next(value)


  }
}
