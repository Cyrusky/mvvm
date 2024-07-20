import {createContext, FC, PropsWithChildren} from "react";
import {ViewModels, ViewModelType} from "../useViewModel.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const ViewModelContext = createContext<ViewModelType>({});

export const ViewModelProvider: FC<PropsWithChildren> = ({children}) => {
  return <ViewModelContext.Provider value={ViewModels}>
    {children}
  </ViewModelContext.Provider>
}
