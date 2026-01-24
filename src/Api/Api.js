import axios from "axios";
const BASEURL = "http://localhost:8080/api/v1";
const AuthURL = "http://localhost:8080/authentication";
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
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Macha Token illai! Login panni token-ah eduthu vai.");
    return;
  }
  try {
    const res = await axios.post(
      `${BASEURL}/cart/add`,
      {
        productId: productId,
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res;
  } catch (error) {
    throw error;
  }
};
// get all carts

export const allCartProducts = async () => {
  const token = localStorage.getItem("token"); //
  try {
    const res = await axios.get(`${BASEURL}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// delete single cart

export const deleteCartById = async (cartId) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(`${BASEURL}/cart/delete/${cartId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) { throw error; }
};

// delete all carts
export const deleteAllCarts = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(`${BASEURL}/cart`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res;
  } catch (error) { throw error; }
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

// --------------------------------- login page ---------------

export const login = async (LoginData) => {
  try {
    const res = await axios.post(`${AuthURL}/login`, LoginData);
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      console.log("Token store aayiduchi macha!");
    }
    return res.data;
  } catch (error) {
    throw error;
  }
};
// --------------------------- registration page -------------------

export const registration = async (userData) => {
  try {
    const res = await axios.post(`${AuthURL}/registration`, userData);
    return res.data;
  } catch (error) {
    console.log("Registration Error:", error.response?.data || error.message);

    throw error;
  }
};


// ----------------------------------- order page --------------------------
export const placeOrder = async () => {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.post(`${BASEURL}/order/place`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
