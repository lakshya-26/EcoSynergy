// utils/api.ts
export const createOrFetchUser = async (auth0Id: string, email: string, name: string) => {
    try {
      const response = await fetch(`${process.env.API_BASE_URL}/api/my/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ auth0Id, email, name }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to create or fetch user:', error);
    }
  };
  