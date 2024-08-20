//utils/api.ts

import { getAccessToken } from '@auth0/nextjs-auth0'

// utils/api.ts
export const createOrFetchUser = async ( auth0Id: string, email: string, name: string) => {
    try {
      const { accessToken } = await getAccessToken();
      const apiUrl = process.env.API_BASE_URL;
      if (!apiUrl) {
        throw new Error("API_BASE_URL is not defined");
    }
      const response = await fetch(`${apiUrl}/api/my/user`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ auth0Id, email, name }),
      });

      if(!response.ok){
        throw new Error("Failed to create user");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to create or fetch user:', error);
    }
  };
  

  