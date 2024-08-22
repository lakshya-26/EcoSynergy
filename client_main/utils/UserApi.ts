//utils/api.ts

import { toast } from "sonner";

export const getAccessTokenFromServer = async () => {
  try {
    const response = await fetch("/api/token");
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error("Failed to fetch access token:", error);
  }
};

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const createOrFetchUser = async (
  auth0Id: string,
  email: string,
  name: string
) => {
  try {
    const accessToken = await getAccessTokenFromServer();
    if (!apiUrl) {
      throw new Error("API_BASE_URL is not defined");
    }
    const response = await fetch(`${apiUrl}/api/my/user`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth0Id, email, name }),
    });

    if (!response.ok) {
      throw new Error("Failed to create user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to create or fetch user:", error);
  }
};

export const getUserData = async () => {
  try {
    const accessToken = await getAccessTokenFromServer();
    if (!apiUrl) {
      throw new Error("API_BASE_URL is not defined");
    }
    const response = await fetch(`${apiUrl}/api/my/user`, {
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

export type updateMyUserRequest = {
  addressLine1: string;
  city: string;
  country: string;
};

export const updateUser = async (formData: updateMyUserRequest) => {
  try {
    const accessToken = await getAccessTokenFromServer();
    if (!apiUrl) {
      throw new Error("API_BASE_URL is not defined");
    }
    const response = await fetch(`${apiUrl}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const data = await response.json();
    toast.success("User profile updated successfully!");
    return data;
  } catch (error: any) {
    toast.error(error.message.toString());
    throw error;
  }
};