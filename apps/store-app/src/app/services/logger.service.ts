import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(message: any) {
    console.log(`LoggerService.log() - ${message}`);

    // code that accesses the server
  }
}
