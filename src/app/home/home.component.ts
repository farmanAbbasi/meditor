import { Component, OnInit } from '@angular/core';

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
  Posts:Post[];
  constructor() { }

  ngOnInit() {
  
      this.getPosts();
    
    
  }

  getPosts(){
    this.Posts=[
      {id: 1,
        username: "farman@gmail.com",
        firstname: "Farman",
        lastname: "Abbasi",
        startdate: "12-1-2021",
        userurl:"https://picsum.photos/100",
        posturl:"https://picsum.photos/200",
        postdesc:"my name is farman,my name is farman,my name is farman. my name is farman, my name is farman, my name is farman, my name is farmanmy name is farmanmy name is farmanmy name is farmanmy name is farman",
        likes:1,
        comment:["a","a"]
      },
      {id: 2,
        username: "farman2@gmail.com",
        firstname: "Aarman2",
        lastname: "Abbasi2",
        startdate: "13-1-2021",
        userurl:"https://picsum.photos/100",
        posturl:"https://picsum.photos/200",
        postdesc:"my name is farman2",
        likes:29,
        comment:[{}]
      }
    ]

    setTimeout(()=>{
      this.postsLoaded=true
  },1000)
    
  }


}
