import axios from "axios";

const BASE_RENDER_URL = "https://smilecart-backend.onrender.com";

const BASEURL = `${BASE_RENDER_URL}/api/v1`;
const AuthURL = `${BASE_RENDER_URL}/authentication`;
const ADMINURL = `${BASE_RENDER_URL}/api/admin`;


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

// delete product using id

export const deleteProductById = async (productId) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(
      `${BASEURL}/product/delete-id/${productId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};

// delete all product
export const deleteAllProduct = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${BASEURL}/product`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};

//
export const UpdateProduct = async (updateFormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(`${BASEURL}/product`, updateFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.log("error message :", error);
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
        Authorization: `Bearer ${token}`,
      },
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
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// delete all carts
export const deleteAllCarts = async () => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.delete(`${BASEURL}/cart`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (error) {
    throw error;
  }
};
// --------------------------------------------------- category --------------------------

// get all product by category id

export const getAllProductByCategory = async (categoryId) => {
  try {
    const res = await axios.get(`${BASEURL}/category/category/${categoryId}`);
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
      localStorage.setItem("role", res.data.role);
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
// place order
export const placeOrder = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${BASEURL}/order/place`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
// get all order details
export const getAllOrder = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${ADMINURL}/all-orders`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("error message " + error);
  }
};
// get single user order details
export const getMyOrders = async () => {
  const res = await axios.get(`${BASEURL}/order/my-orders`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  return res.data;
};

// ----------------------------------- Admin page ------------------------
export const adminDashboard = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${ADMINURL}/dashboard-stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const adminProductList = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${ADMINURL}/all-products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const adminAddAllProducts = async (formData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(`${BASEURL}/product`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message from backend :", error);
    throw error;
  }
};

// ----------------------------------------- User Api ------------------------
//
// get all user
export const getAllUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${BASEURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};
// get total user count
export const getTotalUserCount = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get(`${ADMINURL}/total-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};

// delete user by id
export const deleteUserById = async (email) => {
  try {
    console.log("Deleting User with ID:", email);
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${BASEURL}/user/email/${email}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};

// delete all user
export const deleteAllUser = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${BASEURL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("error message :", error);
    throw error;
  }
};
