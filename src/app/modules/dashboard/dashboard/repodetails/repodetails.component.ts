import { Component,OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'repo-dashboard',
  template: `<div><ng-template #container>Thi sis my tempaklte </ng-template></div>`,
})
export class RepodetailsComponent  implements OnInit{


  constructor(
    private route:ActivatedRoute,
  ) {
    console.log("inside repo details constructor");
  }

  ngOnInit(): void {
    let username = this.route.snapshot.params['username'];
    console.log(username);
  }
}
