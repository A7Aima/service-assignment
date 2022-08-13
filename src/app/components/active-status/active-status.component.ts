import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-status',
  templateUrl: './active-status.component.html',
  styleUrls: ['./active-status.component.scss']
})
export class ActiveStatusComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

}
