import { ADDNAME, REMOVE, CHECK, MONEYOFF } from "../types";

const initialState = {
  money: 3000,
  videos: [
    { name: "Mazda", rnd: 1, key: 1 },
    { name: "Audi", rnd: 2, key: 2 },
    { name: "Opel", rnd: 3, key: 3 },
    { name: "Toyota", rnd: 4, key: 4 },
  ],
};

export default function Project1Reducer(state = initialState, action) {
  switch (action.type) {
    case ADDNAME:
      return {
        ...state,
        videos: state.videos.concat({
          key: Math.random(),
          rnd: Math.floor(Math.random() * 100),
          name: action.payload,
        }),
      };

    case REMOVE:
      return {
        ...state,
        videos: state.videos.filter((video) => video.key !== action.payload),
      };
    case CHECK:
      return {
        ...state,
        videos: state.videos.concat({
          checked: action.payload,
        }),
      };
      case MONEYOFF: 
      return {
        ...state, money: state.money - action.moneyoff
      }
    default:
      return state;
  }
}
