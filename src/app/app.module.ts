import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './materialmodule';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CourseRoutingModule } from './admin/course/course-routing.module';
import { ToastrModule } from 'ngx-toastr'; 
import { CourseModule } from './admin/course/course.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryRoutingModule } from './admin/category/category-routing.module';

import { GenerateStudentRoutingModule } from './admin/generate-student/generate-student-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ServicesComponent } from './user/services/services.component';

import { TermsAndConditionRoutingModule } from './user/terms-and-condition/terms-and-condition-routing.module';
import { CertificateVerificationRoutingModule } from './user/certificate-verification/certificate-verification-routing.module';
import { PrivacyPolicyRoutingModule } from './user/privacy-policy/privacy-policy-routing.module';
import { HiringRoutingModule } from './user/hiring/hiring-routing.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AddPostComponent } from './add-post/add-post.component';
import { PostComponent } from './post/post.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatDialogRef } from '@angular/material/dialog';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { OtpVerifyconditionsComponent } from './TermsAndConditionsComponent/otp-verifyconditions/otp-verifyconditions.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';




// export const route =  [
//   {path: 'home', component:HomeComponent},
// {path: 'about', component: AboutUsComponent},
// {path: 'student/login', component: LoginComponent},
// { path: 'certificate/certificateNumber', loadChildren: () => import('./user/certificate-verification/certificate-verification.module').then(m => m.CertificateVerificationModule) },
// { path: 'create/feedback', loadChildren: () => import('./user/contact-us/contact-us.module').then(m => m.ContactUsModule) },
// { path: 'accounts', component: AccountsComponent, label: 'Accounts' },
  // { path: 'contacts', component: ContactsComponent, label: 'Contacts' },
  // { path: 'activities', component: ActivitiesComponent, label: 'Activities' }
//  ];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AboutUsComponent,
    LoginComponent,
    UserComponent,
    ServicesComponent,
    ConfirmationDialogComponent,
    MatConfirmDialogComponent,
    StudentDetailsComponent,
    AddPostComponent,
    PostComponent,
    BlogPostComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    TermsAndConditionsComponent,
    OtpVerifyconditionsComponent,
    VerifyEmailComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    ToastrModule.forRoot(),
    EditorModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    
    ],
    
 
  bootstrap: [AppComponent],
  entryComponents:[MatConfirmDialogComponent,ForgotPasswordComponent],
  
})
export class AppModule { }
