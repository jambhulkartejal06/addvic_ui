import { StaffRoutingModule } from "../staff/staff-routing.module";

export class PostPayload {
    id:string|number;
    title:string;
    content:string;
    createdOn:string;
    username:string;
    constructor(){}
    }