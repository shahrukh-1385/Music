import axios from "axios";

// create axios client base url:
const client = axios.create({
   baseURL: "http://localhost:3000/"
});
// get all musics:
export async function getMusic() {
   const Res = await client("/Music")
   return Res.data;
}
// Get a music to go to its related page using params
export async function getMusicByID(id: string | number) {
   const Res = await client(`/Music/${id}`);
   return Res.data;
}