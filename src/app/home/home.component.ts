import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../globals.service';

export interface Post{
  id: number,
  username: string,
  firstname: string,
  lastname: string,
  startdate: string,
  userurl: string,
  posturl:string,
  postdesc:string,
  likes: number,
  comment:any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  postsLoaded:boolean=false;
  showCardtext=false;
  Posts=[];
  constructor(public globals: GlobalsService) { }

  ngOnInit() {
  
      this.getPosts();
    
    
  }

  async getPosts(){
    // this.Posts=[
    //   {id: 1,
    //     username: "farman@gmail.com",
    //     firstname: "Farman",
    //     lastname: "Abbasi",
    //     startdate: "12-1-2021",
    //     userurl:"https://picsum.photos/100",
    //     posturl:"https://firebasestorage.googleapis.com/v0/b/fire-blogs-app.appspot.com/o/RoomsImages%2F1639668683880?alt=media&token=c82c3185-369a-4b86-8c39-012bd77e9496",
    //     postdesc:"my name is farman,my name is farman,my name is farman. my name is farman, my name is farman, my name is farman, my name is farmanmy name is farmanmy name is farmanmy name is farmanmy name is farman",
    //     likes:1,
    //     comment:["a","a"]
    //   },
    // ]

 

  let r:any=await this.globals.getReq(this.globals.BASE_BACKEND_URL+"/posts")
  console.log(r)
  this.Posts=r
  this.postsLoaded=true;
    
  }
  imgLoaded(){
    //console.log("img loaded")
    this.showCardtext=true;
  }

  


}
