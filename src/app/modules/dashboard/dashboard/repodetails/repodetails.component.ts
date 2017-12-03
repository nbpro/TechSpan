import {OnInit} from "@angular/core/src/metadata/lifecycle_hooks";
import { ActivatedRoute } from "@angular/router/src/router_state";
export class RepodetailsComponent  implements OnInit{


  constructor(
    private route:ActivatedRoute,
  ) {}

  ngOnInit(): void {
    let username = this.route.snapshot.params['username']
  }
}
