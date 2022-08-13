import { Status } from "../enum/user.enum";

export interface UserModel {
    name: string;
    status: Status;
}