import { BAY } from "../types";

const initialState = {
  computers: [
    {
      title: "Aplle",
      model: "MacBook Air 2020",
      price: 1200,
      parameters: 8,
      id: 1,
      img: "https://tehnoshop.ua/image/cache/catalog/59337_3-250x300.jpg",
    },
    {
      title: "Aplle",
      model: "MacBook Pro 2020",
      price: 1800,
      parameters: 10,
      id: 2,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Lenovo",
      model: "Idea Pad",
      price: 1000,
      parameters: 7,
      id: 3,
      img: "https://tehnoshop.ua/image/cache/catalog/59336_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 4,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 5,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 6,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 7,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 8,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
    {
      title: "Asus",
      model: "Nirvana",
      price: 600,
      parameters: 3,
      id: 9,
      img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
    },
  ],
  mybays: {
    title: "test",
    model: "mode",
    price: 777,
    parameters: 3,
    id: 10  ,
    img: "https://tehnoshop.ua/image/cache/catalog/55532_2-250x300.jpg",
  },

  mybaysActive: [],
};
export default function ComputersReducer(state = initialState, action) {
  switch (action.type) {
    case BAY:
      return {
        ...state,
        mybays: {
          id: action.payload,
          title: action.title,
          img: action.img,
          parameters: action.img,
          price: action.price,
        },
      };
    //     return {
    //   ...state, mybaysActive: state.mybaysActive.slice({
    //     id: action.payload,
    //     title: action.title,
    //     img: action.img,
    //     parameters: action.img,
    //     price: action.price

    //   })
    // }

    default:
      return state;
  }
}
