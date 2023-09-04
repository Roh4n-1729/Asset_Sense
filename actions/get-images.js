import axios from 'axios';
import cloudinary  from 'cloudinary'
import { headers } from "next/headers";


async function getImages(){
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV==="development"?"http":"https"
  let res = await fetch(`${protocal}://${host}/api/community`, { cache: "no-store" });
  let posts = res.json();
  return posts;
}

export default getImages