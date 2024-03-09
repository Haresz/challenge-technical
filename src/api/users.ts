import IUsers from "@/Interface/IUsers";
import Axios from "axios";

export function getAllUser() {
  return Axios.get("http://localhost:2000/users");
}

export function getUserId(id: string) {
  console.log(id);
  return Axios.get(`http://localhost:2000/users/${id}`);
}

export function userRegister(data: IUsers) {
  return Axios.post("http://localhost:2000/users", data);
}

export function updateUser(data: IUsers, id: string) {
  return Axios.put(`http://localhost:2000/users/${id}`, data);
}
