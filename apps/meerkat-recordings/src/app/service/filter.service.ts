import { Subject } from 'rxjs'
import { Injectable } from "@angular/core";

@Injectable()
export class FilterService {
  filter = new Subject<string>()
}
