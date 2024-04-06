import { cookies } from "next/headers";
import jwt from "jsonwebtoken"


export default async function getSession() {
  const session = cookies().get("session")?.value
  if (session) {
    return jwt.verify(session, "BoG");
  } else {
    return null;
  }
}
