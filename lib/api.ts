import CryptoJS from "crypto-js";
import axios from "axios";
const base = "https://api.curios.com/v2/api/";

function createSignature(endpoint: string, payload: any): string {
  const hashed_payload = CryptoJS.SHA256(JSON.stringify(payload)).toString();
  const date = new Date();
  const string_to_hash = `${date.toISOString()} ${endpoint} ${hashed_payload}`;

  const signature = CryptoJS.HmacSHA256(
    string_to_hash,
    process.env.API_SECRET || ""
  );

  return signature.toString();
}

type RegisterPayload = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  terms_agree?: boolean;
  privacy_agree?: boolean;
  is_subscribed?: boolean;
  phone?: string;
  display_name?: string;
};

type LoginPayload = {
  email: string,
  password: string
}

type VerifyPayload = {
  email: string,
  verificationToken: string,
  verificationCode: string,
}

type ResetPasswordPayload = {
  email: string
}

type ResetPasswordCompletePayload = {
  email: string,
  new_password: string,
  reset_code: string
}

async function postCustomer(endpoint: string, payload: RegisterPayload | LoginPayload | VerifyPayload | ResetPasswordCompletePayload | ResetPasswordPayload): Promise<any> {
  const date = new Date();
  const response = await axios.post(`${base}customers/${endpoint}`, payload, {
    headers: {
      "curios-api-key": process.env.API_KEY || "",
      "curios-date": date.toISOString(),
      "curios-signature": createSignature(endpoint, payload),
    },
  });
  return response;
}

async function register(
  email: string,
  password: string,
  first_name: string = "",
  last_name: string = "",
  terms_agree: boolean = false,
  privacy_agree: boolean = false,
  is_subscribed: boolean = false,
  phone: string = "",
  display_name: string = ""
): Promise<any> {
  const payload = {
    email,
    password,
    first_name,
    last_name,
    terms_agree,
    privacy_agree,
    is_subscribed,
    phone,
    display_name,
  };
  return await postCustomer("register", payload);
}

async function login(email: string, password: string): Promise<any> {
  const payload = { email, password };
  return await postCustomer("login", payload);
}

async function verify(
  email: string,
  verificationToken: string,
  verificationCode: string
): Promise<any> {
  const payload = { email, verificationToken, verificationCode };
  return await postCustomer("verify", payload);
}

async function resetPassword(email: string): Promise<any> {
  const payload = { email };
  return await postCustomer("resetPassword", payload);
}

async function resetPasswordComplete(
  email: string,
  new_password: string,
  reset_code: string
): Promise<any> {
  const payload = { email, new_password, reset_code };
  return await postCustomer("resetPasswordComplete", payload);
}

async function getCustomer(endpoint: string, token: string): Promise<any> {
  const date = new Date();
  const response = await axios.get(`${base}customers/${endpoint}`, {
    headers: {
      "curios-api-key": process.env.API_KEY || "",
      "curios-date": date.toISOString(),
      "curios-signature": createSignature(endpoint, {}),
      "Authorization": `Bearer ${token}`
    }
  });

  return response;
}

type Profile = {
  email: string
}

async function profile(token: string): Promise<Profile> {
  const response = (await getCustomer("profile", token)).data;
  return {
    email: response.email
  };
}

type Collection = {}

async function collections(token: string): Promise<Collection[]> {
  const response = (await getCustomer("collections", token)).data;
  return [{}]
}

type Token = {}

async function collectionTokens(token: string, id: string): Promise<Token[]> {
  const response = (await getCustomer(`collections/${id}/tokens`, token)).data;
  return [{}]
}

async function tokens(token: string): Promise<Token[]> {
  const response = (await getCustomer(`tokens`, token)).data;
  return [{}]
}

async function token(token: string, id: string): Promise<Token> {
  const response = (await getCustomer(`tokens/${id}`, token)).data;
  return {}
}
