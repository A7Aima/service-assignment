import { Injectable } from "@angular/core";
import { Status } from "../enum/user.enum";
import { UserModel } from "../interface/user.interface";
import { CountUserService } from "../services/count-user.service";

@Injectable()
export class UserService {
    userList: UserModel[] = [
        { name: "User Name 1", status: Status.Inactive, },
        { name: "User Name 2", status: Status.Active, },
        { name: "User Name 3", status: Status.Inactive, },
        { name: "User Name 4", status: Status.Active, },
        { name: "User Name 5", status: Status.Inactive, },
        { name: "User Name 6", status: Status.Active, },
        { name: "User Name 7", status: Status.Inactive, },
        { name: "User Name 8", status: Status.Active, },
    ];
    constructor(private countService: CountUserService) {
        this.userList.forEach((user, index, _) => {
            if (user.status === 1) {
                ++this.countService.activeUserCountChange;
            } else {
                ++this.countService.inactiveUserCountChange;
            }
        });
    }

    toggleStatus(index: number): void {
        if (this.userList[index].status === Status.Inactive) {
            this.userList[index].status = Status.Active;
            this.countService.onChangeCount(this.userList[index].status);
            this.countService.onLogUserStatusChange(this.userList[index].status, this.userList[index].name)
        } else {
            this.userList[index].status = Status.Inactive;
            this.countService.onChangeCount(this.userList[index].status);
            this.countService.onLogUserStatusChange(this.userList[index].status, this.userList[index].name)
        }
    }

    showStatusCount(status: Status): number {
        if (status === Status.Active) {
            return this.countService.activeUserCountChange;
        } else {
            return this.countService.inactiveUserCountChange;
        }
    }
}