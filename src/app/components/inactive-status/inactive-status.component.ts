import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-inactive-status',
  templateUrl: './inactive-status.component.html',
  styleUrls: ['./inactive-status.component.scss'],
})
export class InactiveStatusComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
