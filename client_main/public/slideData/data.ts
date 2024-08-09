import { StringToBoolean } from "class-variance-authority/types";

type Person = {
    id: number;
    image: string;
  }

type cardData = {
  id: number;
  title: string;
  content: string;
}
  
  const people: Person[] = [
      {
        id: 1,
        image:
          'https://res.cloudinary.com/dca9jrn70/image/upload/v1723198961/ECOSYNERGY_11zon_thi2ja.png',
      },
      {
        id: 2,
        image:
          'https://res.cloudinary.com/dca9jrn70/image/upload/v1723196780/pexels-jplenio-1423600_tlwpy9.jpg',
      },
      {
        id: 3,
        image:
          'https://res.cloudinary.com/dca9jrn70/image/upload/v1723196767/food_rw73ky.jpg',
      },
      {
        id: 4,
        image:
          'https://res.cloudinary.com/dca9jrn70/image/upload/v1723196766/waste_m8lyzi.jpg',
      },
    ];
    

    const apiData: cardData[] = [
      { id: 1, title: "Waste", content: "Effective waste generation tracking through which you can calculate your daily carbon footprint emission through waste" },
      { id: 2, title: "Transport", content: "Transport tracking through you can calucate your carbon footprint emitted through your personal vehicle." },
      { id: 3, title: "Food", content: "Know the carbon footprint emitted through your daily food you are eating."},
      { id: 4, title: "Water", content: "Effectively tracking daily water consumption used by you through which cf emission can also be calculated." },
      { id: 5, title: "Electricity", content: "Know your daily energy consumption and the carbon footprint emitting due to that." },
      { id: 6, title: "Mobile", content: "Find the carbon footprint emitted in the environment due to the riguorous usage of your smartphone." },
    ];

  export {
      people,
      apiData
    };
    