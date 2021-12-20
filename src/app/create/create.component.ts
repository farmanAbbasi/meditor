import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AngularFireStorage } from "@angular/fire/storage";
import { map, finalize, switchAll } from "rxjs/operators";
import { Observable } from "rxjs";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { GlobalsService } from '../globals.service';

export interface Post {
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  startdate: string,
  userurl: string,
  posturl: string,
  postdesc: string
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit {


  messageForm: FormGroup;
  submitted = false;
  success = false;
  // selectedFiles: File = null;

  title = "cloudsSorage";
  selectedFile: File = null;

  downloadURL: Observable<string>;
  percentageUploaded = 0;
  uploadedImgUrl: string = "";
  fileChoosen: any;
  @ViewChild('imageInput', { static: true }) myInputVariable: ElementRef;


  constructor(private formBuilder: FormBuilder,
    public router: Router,
    private storage: AngularFireStorage,
    public globals: GlobalsService) {
  }
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      IdeaDesc: ['', Validators.required],
      file: ['', Validators.required]
    })
    //Swal.fire("Success", "Idea created successfully...", "success");
  }

  onSubmit(value) {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success = true
    this.onFileSelected(value, this.fileChoosen)

  }

  async createIdea(value, uploadedImgUrl) {
    console.log(new Date().toLocaleDateString)
    const postData = {
      "username": "farmanshaikh2009@gmail.com",
      "firstname": "Farman",
      "lastname": "Abbasi",
      "startdate": "dd",
      "userurl": "https://picsum.photos/100",
      "posturl": uploadedImgUrl,
      "postdesc": value.IdeaDesc
    }
    console.log(postData)
    try {

      let r:any= await this.globals.postReq(this.globals.BASE_BACKEND_URL+"/posts/add",postData);
      console.log(r);
      if(r.message=="success"){
        Swal.fire("Success", "Status created...", "success");
      } 
      else{
        Swal.fire("Error", "Error happened...", "error");
      }
      //reverting
      this.percentageUploaded=0;
      this.myInputVariable.nativeElement.value="";
      this.messageForm.reset();
      this.submitted=false;
      this.success=false

    }
    catch (e) {
      console.log(e)
      Swal.fire("Error", "Server error happened...", "error");
    }


  }

  onFileChoose(event) {
    this.fileChoosen = event.target.files[0];
  }


  onFileSelected(value, choosenFile) {
    var n = Date.now();
    //const file = event.target.files[0];
    console.log(this.fileChoosen)
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, this.fileChoosen);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {

              this.uploadedImgUrl = url;
              console.log(this.uploadedImgUrl);
              this.createIdea(value, this.uploadedImgUrl)
            }


          });
        })
      )
      .subscribe(url => {
        if (url) {
          const totalSize = url.totalBytes
          this.percentageUploaded = (url.bytesTransferred / totalSize) * 100
          console.log("s : ", url);
        }
      });

  }



  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event)
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
