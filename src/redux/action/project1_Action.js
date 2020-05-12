import { ADDNAME, REMOVE, MONEYOFF } from "../types";

export const AddName = (text) => ({
  type: ADDNAME,
  payload: text,
});
export const Remove = (key) => ({
  type: REMOVE,
  payload: key,
});
export const Check = (check) => ({
  type: REMOVE,
  payload: check,
});
export const MoneyOff = (comp) => ({
  type: MONEYOFF,
  moneyoff: comp.price

})