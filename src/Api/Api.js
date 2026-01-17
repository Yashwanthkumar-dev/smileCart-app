import axios from "axios";
const BASEURL = "http://localhost:8080/api/v1";
// ---------------------------------------------- product ---------------------------
// get all product
export const getAllProducts = async () => {
  try {
    const res = await axios.get(`${BASEURL}/product`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
//  --------------------------------------------- Cart -------------------------------
// add to cart api
export const addToCart = async (productId, quantity) => {
  try {
    const res = await axios.post(`${BASEURL}/cart/add`, {
      productId: productId,
      quantity: quantity,
    });
    return res;
  } catch (error) {
    throw error;
  }
};
// get all carts

export const allCartProducts = async () => {
  try {
    const res = await axios.get(`${BASEURL}/cart`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// delete single cart

export const deleteCartById = async (cartId) => {
  try {
    const res = await axios.delete(`${BASEURL}/cart/${cartId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// delete all carts
export const deleteAllCarts = async () => {
  try {
    const res = await axios.delete(`${BASEURL}/cart/delete`);
    return res;
  } catch (error) {
    throw error;
  }
};
// --------------------------------------------------- category --------------------------

// get all product by category id

export const getAllProductByCategory = async (categoryId) => {
  try {
    const res = await axios.get(`${BASEURL}/product/category/${categoryId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

//  get all category

export const getAllCategory = async () => {
  try {
    const res = await axios.get(`${BASEURL}/category`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
