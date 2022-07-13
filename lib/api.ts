import CryptoJS from "crypto-js";
import axios from "axios";
import { BehaviorSubject } from "rxjs";
import Router from "next/router";

const tokenSubject = new BehaviorSubject(typeof window !== "undefined" && localStorage.getItem("token"));
const userSubject = new BehaviorSubject(typeof window !== "undefined" && JSON.parse(localStorage.getItem("user")));

export const tokenService = {
  token: tokenSubject.asObservable(),
  get tokenValue() { return tokenSubject.value },

  login,
  logout,
  register,
  verify,
  profile,
  collections,
  collectionTokens,
}

export const userService = {
  user: userSubject.asObservable(),

  get userValue() { return userSubject.value }
}

const base = "https://api.curios.com/v2/api/";

function createSignature(date: Date, endpoint: string, payload: any): string {
  const hashed_payload = CryptoJS.SHA256(JSON.stringify(payload)).toString();
  const string_to_hash = `${date.toISOString()} ${endpoint} ${hashed_payload}`;

  const signature = CryptoJS.HmacSHA256(
    string_to_hash,
    process.env.NEXT_PUBLIC_API_SECRET || ""
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
      "curios-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      "curios-date": date.toISOString(),
      "curios-signature": createSignature(date, `customers/${endpoint}`, payload),
    },
  });
  return response;
}

export async function register(
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
  return await postCustomer("register/", payload);
}

export async function login(email: string, password: string): Promise<any> {
  const payload = { email, password };
  const response = await postCustomer("login/", payload);
  response.data.data.email = email;
  localStorage.setItem("verify", JSON.stringify(response.data.data));
  Router.push('/verify');
}

export function logout() {
  localStorage.removeItem("user");
  tokenSubject.next(null);
  Router.push('/register');
}

export async function verify(
  email: string,
  verificationToken: string,
  verificationCode: string
): Promise<any> {
  const payload = { email, verificationToken, verificationCode };
  const response = await postCustomer("verify/", payload);
  const token = response.data?.data?.session_token;
  tokenSubject.next(token);
  localStorage.setItem("token", token);
  Router.push("/profile");
}

export async function resetPassword(email: string): Promise<any> {
  const payload = { email };
  return await postCustomer("resetPassword/", payload);
}

export async function resetPasswordComplete(
  email: string,
  new_password: string,
  reset_code: string
): Promise<any> {
  const payload = { email, new_password, reset_code };
  return await postCustomer("resetPasswordComplete/", payload);
}

async function getCustomer(endpoint: string, token: string): Promise<any> {
  const date = new Date();
  const response = await axios.get(`${base}customers/${endpoint}`, {
    headers: {
      "curios-api-key": process.env.NEXT_PUBLIC_API_KEY || "",
      "curios-date": date.toISOString(),
      "curios-signature": createSignature(date, `customers/${endpoint}`, {}),
      "Authorization": `Bearer ${token}`,
    },
    data: {}
  });

  return response;
}

export type Profile = {
  email: string,
  first_name: string,
  last_name: string,
  display_name: string,
  phone: string,
  avatar: string,
  account_balance: number,
  max_bid_amount: number,
  total_earned: number,
  total_spent: number,
}

export async function profile(token: string): Promise<Profile> {
  const response = (await getCustomer("profile/", token)).data.data;
  console.log(response);
  const p = {
    email: response.EMAIL,
    first_name: response.FIRST_NAME,
    last_name: response.LAST_NAME,
    display_name: response.DISPLAY_NAME,
    phone: response.PHONE,
    avatar: response.AVATAR,
    account_balance: response.ACCOUNT_BALANCE,
    max_bid_amount: response.MAX_BID_AMOUNT,
    total_earned: response.TOTAL_EARNED,
    total_spent: response.TOTAL_EARNED
  };

  userSubject.next(p);

  return p;
}

export type Collection = {}

export async function collections(token: string): Promise<Collection[]> {
  const response = (await getCustomer("collections/", token)).data;
  return [{}]
}

export type Token = {}

export async function collectionTokens(token: string, id: string): Promise<Token[]> {
  const response = (await getCustomer(`collections/${id}/tokens`, token)).data;
  return [{}]
}

export async function tokens(token: string): Promise<Token[]> {
  const response = (await getCustomer(`tokens`, token)).data;
  return [{}]
}

export async function token(token: string, id: string): Promise<Token> {
  const response = (await getCustomer(`tokens/${id}`, token)).data;
  return {}
}
