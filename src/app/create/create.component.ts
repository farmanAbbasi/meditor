import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  
  messageForm: FormGroup;
  submitted = false;
  success=false;
  savingIdea=false;
  selectedFiles: File = null;
  filesDrop: File[] = [];



  constructor(private formBuilder: FormBuilder,public router: Router) { }

  ngOnInit() {
    


    this.messageForm = this.formBuilder.group({
      
      IdeaDesc: ['', Validators.required]
    
    })

  }

  selectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file, "files")
      this.selectedFiles = file;
      console.log(this.selectedFiles, " selected file")
    }
  }


  
 


  onSubmit(value) {
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    this.success=true
    this.createIdea(value)
    
  }

  async createIdea(value){
    console.log(value,"Form filled");
    const formData = new FormData();
    formData.append("description",value.IdeaDesc,);
    formData.append('file', this.selectedFiles);
    // formData.append('benefit', value.IdeaBenefit);
    // formData.append('principle', value.IdeaPrinciple);
    // formData.append('uniqueness', value.IdeaUniquenngess);
  
    
    try{
      
    }
    catch(e){
      
    }


  }

  

}
