//utils/api.ts

export const getAccessTokenFromServer = async () => {
  try {
    const response = await fetch('/api/token');
    if (!response.ok) {
      throw new Error("Failed to fetch access token");
    }

    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
  }
};

// utils/api.ts
export const createOrFetchUser = async ( auth0Id: string, email: string, name: string) => {
    try {
      const accessToken = await getAccessTokenFromServer();
      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
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
  

  