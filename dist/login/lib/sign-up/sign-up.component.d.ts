import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';
import { ApiService } from '../api.service';
export interface DialogData {
    name: string;
}
export declare class SignUpComponent implements OnInit {
    fb: FormBuilder;
    http: HttpClient;
    router: Router;
    dialog: MatDialog;
    apiService: ApiService;
    message: any;
    formDirective: FormGroupDirective;
    formTitleValue: any;
    serverUrlValue: any;
    forgetRouteingUrlValue: any;
    loginRouteingUrlValue: any;
    addEndpointValue: any;
    logoValue: any;
    formTitle: any;
    serverUrl: any;
    logo: any;
    addEndpoint: any;
    forgetRouteingUrl: any;
    loginRouteingUrl: any;
    signUpForm: FormGroup;
    constructor(fb: FormBuilder, http: HttpClient, router: Router, dialog: MatDialog, apiService: ApiService);
    ngOnInit(): void;
    /********* Sign Up Form Submit start here*********/
    signUpFormSubmit(): void;
    /********* Sign Up Form Submit end here*********/
    forgetpassword(): void;
    login(): void;
    inputUntouched(val: any): void;
}
export declare class commonModalComponent {
    dialogRef: MatDialogRef<commonModalComponent>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<commonModalComponent>, data: DialogData);
    onNoClick(): void;
}
