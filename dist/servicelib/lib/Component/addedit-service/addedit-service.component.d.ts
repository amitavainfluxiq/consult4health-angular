import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicelibService } from '../../servicelib.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
export interface DialogData {
    msg: string;
}
export declare class AddeditServiceComponent implements OnInit {
    private formBuilder;
    private servicehttp;
    private router;
    dialog: MatDialog;
    /**ckeditor start here*/
    Editor: any;
    editorConfig: {
        placeholder: string;
    };
    model: {
        editorData: string;
    };
    /**ckeditor end here*/
    serviceForm: FormGroup;
    loader: boolean;
    configData: any;
    buttonText: string;
    successMessage: string;
    dialogRef: any;
    flag: boolean;
    constructor(formBuilder: FormBuilder, servicehttp: ServicelibService, router: Router, dialog: MatDialog);
    ngOnInit(): void;
    config: any;
    generateForm(): void;
    setDefaultValue(defaultValue: any): void;
    addBulletList(a: any, b: any): void;
    deleteBulletList(): void;
    trackByFn(index: any): any;
    onSubmit(): void;
    openDialog(x: any): void;
    resetserviceForm(): void;
    inputBlur(val: any): void;
}
export declare class Modal {
    dialogRef: MatDialogRef<Modal>;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<Modal>, data: DialogData);
    onNoClick(): void;
}
