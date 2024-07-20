import {CounterVM} from "../viewModel/counterVM.ts";
import {IoC} from "../configs/IoC.ts";


export enum ViewModel {
  CounterVM = "CounterVM",
}

export type ViewModelType = {
  [ViewModel.CounterVM]: CounterVM,
}

export const ViewModels: ViewModelType = {
  get [ViewModel.CounterVM]() {
    return IoC.container.get(CounterVM)
  },
}

export const useViewModel = (viewMode: ViewModel) => {
  return ViewModels[viewMode]
}

