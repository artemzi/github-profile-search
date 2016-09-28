import { Component } from '@angular/core';
import { GithubService } from "../../services/github.service";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent {
  user = [];

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(
      user => {
        this.user = user;
      }
    );
  }

}
