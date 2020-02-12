import { Subject } from 'rxjs'

export class FilterService {
  filter = new Subject<string>()
}
