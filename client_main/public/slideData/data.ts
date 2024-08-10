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

type blog = {
  id: number;
  title: string;
  image: string;
  author: string;
  link: string;
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
      { id: 3, title: "Food", content: "Know the carbon footprint emitted through your daily food you are eating and make informed choices for a sustainable future."},
      { id: 4, title: "Water", content: "Effectively tracking daily water consumption used by you through which cf emission can also be calculated." },
      { id: 5, title: "Electricity", content: "Know your daily energy consumption and the carbon footprint emitting due to that for a more sustainable lifestyle." },
      { id: 6, title: "Mobile", content: "Find the carbon footprint emitted in the environment due to the riguorous usage of your smartphone." },
    ];

    const blogData: blog[] = [
      { id: 1, title: "‘Your Carbon Footprint’ — Only The Best Gaslighting Around", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*bvOQoNbNzS3TA0z7eo89sQ.jpeg", author: "Joe Guay", link: "https://medium.com/the-shortform/your-carbon-footprint-only-the-best-gaslighting-around-28cc50de3d7f" },
      { id: 2, title: "Sustainable Living: Practical Tips for Reducing Your Carbon Footprint", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*fVkjeiTqmZRP9fam", author: "Isabel Loução", link: "https://medium.com/@isabelloucao18/sustainable-living-practical-tips-for-reducing-your-carbon-footprint-f7e9799ebeec" },
      { id: 3, title: "Reducing The Carbon Footprint Through Retirement", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*gbbnOTE_f9SW7H_vZHqOvw.jpeg", author: "Greenconflict", link: "https://medium.com/@info_52191/reducing-the-carbon-footprint-through-retirement-dcb5df8dc021"},
      { id: 4, title: "I Went Vegan for 6 Months to Reduce My Carbon Footprint — Here’s How It Changed Me", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*DTJSUeUXlv3VTIfx", author: "Sachin pandit", link: "https://medium.com/hello-love/i-went-vegan-for-6-months-to-reduce-my-carbon-footprint-heres-how-it-changed-me-c79171f68b7a" },
      { id: 5, title: "AI to Inspect Your Carbon Footprint", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*jw26J69kVqWWi9Vm", author: "Jayke FM", link: "https://medium.com/unreleashed/ai-to-inspect-your-carbon-footprint-a18790a390a5" },
      { id: 6, title: "Reducing Carbon Footprint through Web Vitals Optimisation", image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*pN7HhOVLDVOk7A3sF84-Jg.png", author: "Dimitris Kiriakakis", link: "https://medium.com/zeal-tech-blog/reducing-carbon-footprint-through-web-vitals-optimisation-a1d9629821e8" },
    ]

  export {
      people,
      apiData, 
      blogData
    };
    