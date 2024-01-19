import Cookies from "js-cookie";
import axios, { AxiosInstance } from "axios";

export const HOME_URL = "https://symfony-instawish.formaterz.fr/";
const API_URL = HOME_URL + "api/";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(API_URL + "login_check", {
      username,
      password,
    });
    const token = response.data.token;
    if (!token) return false;
    const expiration_date = new Date(new Date().getTime() + 3600 * 1000);
    Cookies.set("token", token, { expires: expiration_date });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default class ApiService {
  axiosCreate: AxiosInstance;
  constructor() {
    const token = Cookies.get("token");
    this.axiosCreate = axios.create({
      baseURL: API_URL,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  async me() {
    const response = await this.axiosCreate.get("me");
    return response.data as User;
  }

  async home() {
    const response = await this.axiosCreate.get("home");
    return response.data as Post[];
  }
}
