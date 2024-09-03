import {toast} from "sonner";
import {getAccessTokenFromServer} from "./UserApi"

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const logEnergyData = async (formData: FormData) => {
    try {
      const accessToken = await getAccessTokenFromServer();
      if (!apiUrl) {
        throw new Error("API_BASE_URL is not defined");
      }
  
      const response = await fetch(`${apiUrl}/api/my/energyTracking`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
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