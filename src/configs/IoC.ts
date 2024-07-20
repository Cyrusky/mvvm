import {Container} from "inversify";
import {CounterVM} from "../viewModel/counterVM.ts";

export class IoC {
  private static instance: IoC;
  private _Container: Container

  private constructor() {
    const container = new Container()
    container.bind(CounterVM).toSelf().inSingletonScope()
    this._Container = container
  }

  static get container() {
    if (!this.instance) {
      this.instance = new IoC();
    }
    return this.instance._Container
  }
}

