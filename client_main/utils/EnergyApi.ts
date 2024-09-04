import {toast} from "sonner";
import {getAccessTokenFromServer} from "./UserApi"

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export type logMyEnergyRequest = {
  month: string;
  year: string;
  usage?: string; // Allow undefined
};


export const logEnergyData = async (formData: logMyEnergyRequest) => {
  try {
    const accessToken = await getAccessTokenFromServer();
    if (!apiUrl) {
      throw new Error("API_BASE_URL is not defined");
    }

    const response = await fetch(`${apiUrl}/api/my/energyTracking`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...formData,
        usage: formData.usage || "", // Ensure usage is a string in the request body
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to log energy data");
    }

    const data = await response.json();
    toast.success("Energy data logged successfully!");
    return data;
  } catch (error: any) {
    toast.error(error.message.toString());
    throw error;
  }
};

  export const getEnergyData = async () => {
    try {
      const accessToken = await getAccessTokenFromServer();
      if (!apiUrl) {
        throw new Error("API_BASE_URL is not defined");
      }
      const response = await fetch(`${apiUrl}/api/my/energyTracking`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
  
      if(!response.ok){
        throw new Error("Failed to get user data");
      }
      const data = await response.json();
      return data;
    } catch (error: any) {
      toast.error(error.message.toString());
    }
  };