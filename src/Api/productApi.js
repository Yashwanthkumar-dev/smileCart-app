import axios from "axios";
const BASEURL = "http://localhost:8080/api/v1";
export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${BASEURL}/product`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
