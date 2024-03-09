export default interface Users {
  id: string;
  username: string;
  phoneNumber: number;
  password: string;
}

export interface UserState {
  users: Users[];
}
