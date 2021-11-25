import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  constructor() {}

  printToConsole(arg: any) {
    console.log(arg);
  }
}
