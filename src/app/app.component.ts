import { HttpClient } from '@angular/common/http';
import { Component, Inject, VERSION } from '@angular/core';
import { User } from './address-card/user.model';
import { TestService } from './test.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText: string = 'Initial value';
  userField: User;

  constructor(testService: TestService,private http: HttpClient) {
    this.userField = new User();
    this.userField.name = 'Vasea Fiodorovichi';
    this.userField.designation = 'Software Developer';
    this.userField.address = '1234 Main St. New York, 122321';
    this.userField.phone = ['1213121', '232343423'];
    testService.printToConsole('hello');
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/koushikkothagal')
    obs.subscribe(response => console.log(response))
  }

}
