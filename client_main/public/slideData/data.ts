import { StringToBoolean } from "class-variance-authority/types";

type Person = {
  id: number;
  image: string;
};

type cardData = {
  id: number;
  title: string;
  content: string;
};

type blog = {
  id: number;
  title: string;
  image: string;
  author: string;
  link: string;
};

type featuredData = {
  id: number;
  image: string;
  title: string;
  content: string;
};

const people: Person[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723198961/ECOSYNERGY_11zon_thi2ja.png",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723196780/pexels-jplenio-1423600_tlwpy9.jpg",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723196767/food_rw73ky.jpg",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723196766/waste_m8lyzi.jpg",
  },
];

const apiData: cardData[] = [
  {
    id: 1,
    title: "Waste",
    content:
      "Effective waste generation tracking through which you can calculate your daily carbon footprint emission through waste",
  },
  {
    id: 2,
    title: "Transport",
    content:
      "Transport tracking through you can calucate your carbon footprint emitted through your personal vehicle.",
  },
  {
    id: 3,
    title: "Food",
    content:
      "Know the carbon footprint emitted through your daily food you are eating and make informed choices for a sustainable future.",
  },
  {
    id: 4,
    title: "Water",
    content:
      "Effectively tracking daily water consumption used by you through which cf emission can also be calculated.",
  },
  {
    id: 5,
    title: "Electricity",
    content:
      "Know your daily energy consumption and the carbon footprint emitting due to that for a more sustainable lifestyle.",
  },
  {
    id: 6,
    title: "Mobile",
    content:
      "Find the carbon footprint emitted in the environment due to the riguorous usage of your smartphone.",
  },
];

const blogData: blog[] = [
  {
    id: 1,
    title: "‘Your Carbon Footprint’ — Only The Best Gaslighting Around",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*bvOQoNbNzS3TA0z7eo89sQ.jpeg",
    author: "Joe Guay",
    link: "https://medium.com/the-shortform/your-carbon-footprint-only-the-best-gaslighting-around-28cc50de3d7f",
  },
  {
    id: 2,
    title:
      "Sustainable Living: Practical Tips for Reducing Your Carbon Footprint",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*fVkjeiTqmZRP9fam",
    author: "Isabel Loução",
    link: "https://medium.com/@isabelloucao18/sustainable-living-practical-tips-for-reducing-your-carbon-footprint-f7e9799ebeec",
  },
  {
    id: 3,
    title: "Reducing The Carbon Footprint Through Retirement",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*gbbnOTE_f9SW7H_vZHqOvw.jpeg",
    author: "Greenconflict",
    link: "https://medium.com/@info_52191/reducing-the-carbon-footprint-through-retirement-dcb5df8dc021",
  },
  {
    id: 4,
    title:
      "I Went Vegan for 6 Months to Reduce My Carbon Footprint — Here’s How It Changed Me",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*DTJSUeUXlv3VTIfx",
    author: "Sachin pandit",
    link: "https://medium.com/hello-love/i-went-vegan-for-6-months-to-reduce-my-carbon-footprint-heres-how-it-changed-me-c79171f68b7a",
  },
  {
    id: 5,
    title: "AI to Inspect Your Carbon Footprint",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/0*jw26J69kVqWWi9Vm",
    author: "Jayke FM",
    link: "https://medium.com/unreleashed/ai-to-inspect-your-carbon-footprint-a18790a390a5",
  },
  {
    id: 6,
    title: "Reducing Carbon Footprint through Web Vitals Optimisation",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*pN7HhOVLDVOk7A3sF84-Jg.png",
    author: "Dimitris Kiriakakis",
    link: "https://medium.com/zeal-tech-blog/reducing-carbon-footprint-through-web-vitals-optimisation-a1d9629821e8",
  },
];

const features: featuredData[] = [
  {
    id: 1,
    title: "Food Consumption Tracking",
    content:
      "Track your food consumption effortlessly with EcoSynergy's intuitive food tracking feature. Our app allows you to log daily meals, monitor nutritional intake, and visualize your carbon footprint in real-time. Whether you're aiming to reduce waste, eat healthier, or make sustainable choices, EcoSynergy provides personalized insights to help you achieve your goals. Stay informed with detailed reports and easy-to-read charts, empowering you to make mindful decisions that contribute to a healthier planet and a more balanced lifestyle.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797734/HL-2143516-Mediterranean_Diet_vs_Paleo_Diet-1296x728-Header_fsxyyq.gif",
  },
  {
    id: 2,
    title: "Energy Consumption Tracking",
    content:
      "Monitor and optimize your energy usage with EcoSynergy's advanced energy consumption tracking feature. Our app lets you log monthly energy data, upload bills via image recognition, and track your energy generation and consumption patterns over time. Gain valuable insights into your household's energy efficiency, identify areas for improvement, and reduce your carbon footprint. With easy-to-read graphs and personalized recommendations, EcoSynergy empowers you to take control of your energy usage, save on costs, and contribute to a more sustainable future.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797734/home-assistant-energy-distribution-card-animation_uaf5xe.gif",
  },
  {
    id: 3,
    title: "Waste Tracking",
    content:
      "Take charge of your waste management with EcoSynergy's intuitive waste tracking feature. Our app helps you log daily waste production, categorize it by type, and track your disposal habits over time. By visualizing your waste generation patterns, EcoSynergy provides actionable insights to help you reduce waste, recycle more effectively, and minimize your environmental impact. Join a community of eco-conscious individuals committed to sustainable living, and start making a difference in the fight against waste and pollution today.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797736/gifforever_qem6ez.gif",
  },
  {
    id: 4,
    title: "Water Tracking",
    content:
      "Optimize your water usage with EcoSynergy's innovative water tracking feature. Our app allows you to monitor daily water consumption, identify patterns, and set personalized goals to reduce waste. Whether it's tracking household water usage or monitoring irrigation systems, EcoSynergy provides real-time data and insightful analytics to help you conserve this precious resource. Join a community dedicated to sustainable living and make every drop count. Start your journey towards water efficiency and environmental responsibility with EcoSynergy today.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797734/tankSystems_animation_85909f9e-05c7-4ebc-bed6-f9c8119587f3_1600x_u9ldf5.gif",
  },
  {
    id: 5,
    title: "Transport Tracking",
    content:
      "EcoSynergy's transport tracking feature empowers you to reduce your carbon footprint by monitoring your travel habits. Track your daily commutes, whether by car, bike, or public transport, and get detailed insights into fuel consumption, distance traveled, and CO2 emissions. Our app helps you make eco-friendly transportation choices by offering personalized tips and real-time data. Whether you’re aiming to save on fuel costs or contribute to a greener planet, EcoSynergy makes sustainable travel simple and rewarding. Join us on the road to a cleaner future.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797734/loading_qbf1jg.gif",
  },
  {
    id: 6,
    title: "Mobile Usage Tracking",
    content:
      "EcoSynergy's mobile usage tracking helps you take control of your digital footprint. By monitoring your smartphone usage, it provides insights into your screen time, data consumption, and the energy impact of your device. With personalized tips to reduce energy consumption and promote healthier habits, EcoSynergy empowers you to balance your digital life while contributing to a sustainable future. Whether you’re looking to cut down on screen time or make eco-friendly choices, our app guides you towards a more mindful and sustainable mobile experience.",
    image:
      "https://res.cloudinary.com/dca9jrn70/image/upload/v1723797737/aae5b679b0a8fed771b65707ec0e7d2c_lbyfti.gif",
  },
];

export { people, apiData, blogData };
