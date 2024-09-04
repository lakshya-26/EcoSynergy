export type User = {
    auth0Id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };

export type Energy = {
  _id: string;
  user: string;
  month: string;
  year: number;
  usage: number;
  carbonFootprint: number;
  totalCarbonFootprint: number;
  difference: number;
  imageUrl: number;
  date: Date;
}