import { Injectable } from "@angular/core";
import { Status } from "../enum/user.enum";
import { UserService } from "./user.service";
@Injectable()
export class CountUserService {
    activeUserCountChange: number = 0;

    inactiveUserCountChange: number = 0;

    constructor() {
    }

    onChangeCount(status: Status): void {
        if (status === Status.Active) {
            ++this.activeUserCountChange;
            --this.inactiveUserCountChange;
        } else {
            --this.activeUserCountChange;
            ++this.inactiveUserCountChange;
        }
    }
}