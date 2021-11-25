import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css'],
})
export class ViewComponentComponent implements OnInit {
  
  userName: string;
  gitHubResponse: any;
  defaultValue: string;

  constructor(private testService: TestService, private http: HttpClient) {
    testService.printToConsole('hello from module component');
    this.defaultValue = 'koushikkothagal'
  }

  search(){
    let obs = this.http.get('https://api.github.com/users/' + this.userName)
    obs.subscribe(response => this.gitHubResponse = response)
  }
  ngOnInit() {
    
  }
}
