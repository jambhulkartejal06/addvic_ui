import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AdminComponent } from './admin/admin.component';
import { ViewBatchesComponent } from './admin/batch/view-batches/view-batches.component';
import { ViewCategoryComponent } from './admin/category/view-category/view-category.component';
import { ViewCoursesComponent } from './admin/course/view-courses/view-courses.component';
import { ViewDesignationComponent } from './admin/designation/view-designation/view-designation.component';
import { ViewServiceComponent } from './admin/view-service/view-service.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ChangePasswordComponent } from './change-password/change-password.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ServicesComponent } from './user/services/services.component';

const routes: Routes = [
{path: 'home', component:HomeComponent,data: { title: 'Home' }},
{path: 'about', component: AboutUsComponent, data: { title: 'Services and Training |Best Information Technology' }},
{path: 'createblog', component:AddPostComponent},
{path: 'createblog/:id', component:AddPostComponent},
{path: 'blogs',data: { title: 'Blogs | Blogging' }, component: PostComponent},
{path: 'getpost/:id' ,component:BlogPostComponent},
{path: 'admin/signup', component:AdminComponent},
{path: 'forgotPassword', component:ForgotPasswordComponent},
{path: 'student/changePassword',component:ChangePasswordComponent},
{path: 'termsCondition',component:TermsAndConditionsComponent},
{path: 'student/login', component: LoginComponent,data: { title: 'Login'}},
{path: 'course/create', loadChildren: () => import('./admin/course/course.module').then(m => m.CourseModule)},
{path: 'category/create', loadChildren: () => import('./admin/category/category.module').then(m => m.CategoryModule) },
{path: 'batch/create', loadChildren: () => import('./admin/batch/batch.module').then(m => m.BatchModule) },
{path: 'sidenav', loadChildren: () => import('./admin/sidenav/sidenav.module').then(m => m.SidenavModule) },
{path: 'student/signupnew', loadChildren: () => import('./admin/generate-student/generate-student.module').then(m => m.GenerateStudentModule) },
{path: 'student/signupnew/:user_id', loadChildren: () => import('./admin/generate-student/generate-student.module').then(m => m.GenerateStudentModule) },
{path: 'create/certificate', loadChildren: () => import('./admin/certificate-details/certificate-details.module').then(m => m.CertificateDetailsModule) },
{path: 'certificate/verification',data: { title: 'Verify Certificate | Certificate Verification'} , loadChildren: () => import('./user/certificate-verification/certificate-verification.module').then(m => m.CertificateVerificationModule) },
{path: 'contact/us',data: { title: 'Contact Us'}, loadChildren: () => import('./user/contact-us/contact-us.module').then(m => m.ContactUsModule) },
{path: 'feedback',data: { title: 'Feedback | Feedback Form'}, loadChildren: () => import('./user/feedback/feedback.module').then(m => m.FeedbackModule) },
{path: 'privacy', loadChildren: () => import('./user/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
{path: 'terms-conditions', loadChildren: () => import('./user/terms-and-condition/terms-and-condition.module').then(m => m.TermsAndConditionModule) },
{path: 'digitalmarketing/service',data: { title: 'Digital Marketing | Marketing | Online Marketing'} , loadChildren: () => import('./user/services/digital-marketing/digital-marketing.module').then(m => m.DigitalMarketingModule) },
{path: 'graphics/service',data: { title: 'Graphic Design | Logo Design | Graphic Design Services'} , loadChildren: () => import('./user/services/graphics/graphics.module').then(m => m.GraphicsModule) },
{path: 'it/service',data: { title: 'Website Builder | Website Services'}, loadChildren: () => import('./user/services/it/it.module').then(m => m.ItModule) },
{path: 'mechanical/service',data: { title: 'Mechanical Services | Mechanical Tools | Mechanical' }, loadChildren: () => import('./user/services/mechanical-design/mechanical-design.module').then(m => m.MechanicalDesignModule) },
{path: 'hiring', loadChildren: () => import('./user/hiring/hiring.module').then(m => m.HiringModule) },
{path: 'create/designation', loadChildren: () => import('./admin/designation/designation.module').then(m => m.DesignationModule) },
{path: 'create/service', component:ServicesComponent},
{path: 'services', component:ViewServiceComponent},
{path: 'batches', component:ViewBatchesComponent},
{path: 'categories', component:ViewCategoryComponent},
{path: 'designations', component:ViewDesignationComponent},
{path: 'courses',data: { title: 'Best IT and Mechanical Training Institute In India.'}, loadChildren: () => import('./user/our-training/our-training.module').then(m => m.OurTrainingModule) },
{path: 'mechanical/courses',data: { title: 'Mechanical Design Courses'}, loadChildren: () => import('./user/mechanical-courses/mechanical-courses.module').then(m => m.MechanicalCoursesModule) },
{path: 'it/courses',data: { title: 'Information Technology Courses'}, loadChildren: () => import('./user/it-courses/it-courses.module').then(m => m.ItCoursesModule) },
{path: 'itcourses/create', loadChildren: () => import('./admin/it-courses/it-courses.module').then(m => m.ItCoursesModule) },
{path: 'itcategory/create', loadChildren: () => import('./admin/it-category/it-category.module').then(m => m.ItCategoryModule) },
{path: 'forms', loadChildren: () => import('./admin/view-hiring/view-hiring.module').then(m => m.ViewHiringModule) },
{path: 'certificates', loadChildren: () => import('./admin/certificate-details/view-certificate/view-certificate.module').then(m => m.ViewCertificateModule) },
{path: 'itcategories', loadChildren: () => import('./admin/it-category/view-it-category/view-it-category.module').then(m => m.ViewItCategoryModule) },
{path: 'get/trainers', loadChildren: () => import('./admin/view-mech-lead/view-mech-lead.module').then(m => m.ViewMechLeadModule) },
{path: 'get/ittrainers', loadChildren: () => import('./admin/view-it-lead/view-it-lead.module').then(m => m.ViewItLeadModule) },
{path: 'feedbacks', loadChildren: () => import('./admin/view-feedback/view-feedback.module').then(m => m.ViewFeedbackModule) },
{path: 'feedbacks', loadChildren: () => import('./admin/view-contact-us/view-contact-us.module').then(m => m.ViewContactUsModule) },
{path: 'itallcourses', loadChildren: () => import('./admin/it-courses/view-it-courses/view-it-courses.module').then(m => m.ViewItCoursesModule) },
{path: 'services', loadChildren: () => import('./admin/view-service/view-service.module').then(m => m.ViewServiceModule) },
{path: 'studentPortal', loadChildren: () => import('./user/student-portal/student-portal.module').then(m => m.StudentPortalModule) },
{path: 'permit/counsellor/signup', loadChildren: () => import('./counsellor/counsellor.module').then(m => m.CounsellorModule) },
{path: 'counsellor/signup/:user_id', loadChildren: () => import('./counsellor/counsellor.module').then(m => m.CounsellorModule) },
{path: 'counsellorPortal', loadChildren: () => import('./counsellor/counsellor-portal/counsellor-portal.module').then(m => m.CounsellorPortalModule) },
{path: 'staff/signup', loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule) },
{path: 'staffPortal', loadChildren: () => import('./staff/staff-portal/staff-portal.module').then(m => m.StaffPortalModule) },
{path: 'students', loadChildren: () => import('./admin/generate-student/view-student/view-student.module').then(m => m.ViewStudentModule) },
{path: 'users', loadChildren: () => import('./counsellor/view-counsellor/view-counsellor.module').then(m => m.ViewCounsellorModule) },
{path: 'checkBirthday', loadChildren: () => import('./admin/student-birthday/student-birthday.module').then(m => m.StudentBirthdayModule) },
{path: 'viewStaff', loadChildren: () => import('./staff/view-staff/view-staff.module').then(m => m.ViewStaffModule) },
{path: 'student/attendance', loadChildren: () => import('./staff/student-attendance/student-attendance.module').then(m => m.StudentAttendanceModule) },
{path: 'viewBlog', loadChildren: () => import('./admin/view-blog/view-blog.module').then(m => m.ViewBlogModule) },
{path: 'viewStudentAttendence', loadChildren: () => import('./staff/view-student-attendence/view-student-attendence.module').then(m => m.ViewStudentAttendenceModule) },
{path: 'create/exam', loadChildren: () => import('./admin/exam-form/exam-form.module').then(m => m.ExamFormModule) },
{path: 'getexam', loadChildren: () => import('./admin/exam-list/exam-list.module').then(m => m.ExamListModule) },
{path: 'mechanical/allcourses', component:ViewCoursesComponent},
{path: 'graphic/create', loadChildren: () => import('./user/digital-create-category/digital-create-category.module').then(m => m.DigitalCreateCategoryModule) },
{path: 'graphic/make', loadChildren: () => import('./user/digital-create-course/digital-create-course.module').then(m => m.DigitalCreateCourseModule) },
{path: 'graphic/service', loadChildren: () => import('./user/digital-marketing-and-graphic-course/digital-marketing-and-graphic-course.module').then(m => m.DigitalMarketingAndGraphicCourseModule) },
{path: 'intern/service', loadChildren: () => import('./user/intership-course/intership-course.module').then(m => m.IntershipCourseModule) },
{path: 'internship/course/create', loadChildren: () => import('./user/intership-create-course/intership-create-course.module').then(m => m.IntershipCreateCourseModule) },
{path: 'internship/category/create', loadChildren: () => import('./user/intership-create-category/intership-create-category.module').then(m => m.IntershipCreateCategoryModule) },
{ path: 'graphic/categories', loadChildren: () => import('./admin/view-digital-marketing-category/view-digital-marketing-category.module').then(m => m.ViewDigitalMarketingCategoryModule) },
{ path: 'graphic/allcourses', loadChildren: () => import('./admin/view-digital-marketing-course/view-digital-marketing-course.module').then(m => m.ViewDigitalMarketingCourseModule) },
{ path: 'graphic/services', loadChildren: () => import('./admin/view-digital-marketing-enrollment-intrest/view-digital-marketing-enrollment-intrest.module').then(m => m.ViewDigitalMarketingEnrollmentIntrestModule) },
{ path: 'intern/get/trainers', loadChildren: () => import('./admin/view-internship-enrollment-intrest/view-internship-enrollment-intrest.module').then(m => m.ViewInternshipEnrollmentIntrestModule) },
{ path: 'internship/allcourses', loadChildren: () => import('./admin/view-internship-course/view-internship-course.module').then(m => m.ViewInternshipCourseModule) },
{ path: 'internship/categories', loadChildren: () => import('./admin/view-internship-category/view-internship-category.module').then(m => m.ViewInternshipCategoryModule) },
{path: '**', component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
