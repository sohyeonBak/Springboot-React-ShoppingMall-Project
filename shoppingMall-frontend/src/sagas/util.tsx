import { PayloadAction } from "typesafe-actions"
import { SignUpProfile } from "../reducers/user";


export const asyncActionCreator = (actionName: string) => {
  const asyncTypeAction: string[]=['_REQUEST', '_SUCCESS', '_FAILURE'];
  return {
    'REQUEST': actionName+asyncTypeAction[0],
    "SUCCESS": actionName+asyncTypeAction[1],
    "FAILURE": actionName+asyncTypeAction[2],
  }
}