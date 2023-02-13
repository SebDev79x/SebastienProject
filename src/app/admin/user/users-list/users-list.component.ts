import { Component } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { BehaviorSubject, Observable, Subscription, of, delay } from 'rxjs';
import { IUser } from 'src/app/_interfaces/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  /*   public defaultUsersList: IUser[] = [];
    public usersList$ = of(this.defaultUsersList).pipe(delay(3000)) */
  public dataSource!: any;
  url = 'http://localhost:8888/users'
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'nickname',
    'email',
    'createdAt',
    'updatedAt',
    'deletedAt'

  ];

  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users: any) => {
      console.log(users.data);
      return this.dataSource = new MatTableDataSource(users.data);
    })
  }
}
