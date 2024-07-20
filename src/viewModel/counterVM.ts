import {Counter} from "../model/counter.ts";
import {makeAutoObservable} from "mobx";
import {injectable} from "inversify";


@injectable()
export class CounterVM {
  private counterModel: Counter;

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true})
    this.counterModel = new Counter()
  }

  get counter() {
    return this.counterModel.count;
  }

  increment() {
    this.counterModel.count++;
  }

  decrement() {
    this.counterModel.count--;
  }
}
