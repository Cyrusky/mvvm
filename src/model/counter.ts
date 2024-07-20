import {makeAutoObservable} from "mobx";


export class Counter {

  count = 0

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true})
  }
}
