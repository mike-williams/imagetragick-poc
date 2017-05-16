import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
    @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;

    public status : string;

    constructor(private http: Http) { }

    upload() {
        console.log('upload..');

        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        formData.append('image', inputEl.files.item(0));

        console.log('POST file to server');
        this.http
            .post('upload', formData).subscribe(
            (result) => {
                console.log('success');                
                this.status = JSON.stringify(result.json());
            },
            (error) => {
                this.status = 'Error .. check console logs';
                console.error('error ', error);
            });

    }
}