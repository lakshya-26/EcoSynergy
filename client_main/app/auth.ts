// app/auth0.ts
import { initAuth0 } from "@auth0/nextjs-auth0";

export const auth0 = initAuth0({
  secret:process.env.AUTH0_SECRET, 
  issuerBaseURL:process.env.AUTH0_ISSUER_BASE_URL ,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  routes:{
    callback: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    postLogoutRedirect: `${process.env.NEXT_PUBLIC_BASE_URL}/`
  }
});
