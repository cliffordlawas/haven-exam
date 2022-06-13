import { User } from "./User";

export interface UserContact extends User{
    bookAMeeting?: number;
    preferredDay?: string;
    preferredTime?: string;
}