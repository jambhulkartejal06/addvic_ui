export class Course{
    course_id:number;
    courseName:string;
    courseImage: File;
    coursePDF: File;
    basicPlan:string;
    premiumPlan:string;
    category: string;
    categories:{
        cat_id:number;
        category: string;
    }
   
    constructor() {}
}
