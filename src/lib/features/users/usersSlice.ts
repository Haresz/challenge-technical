import IUsers, { UserState } from "@/Interface/IUsers";
import { getAllUser, getUserId, updateUser, userRegister } from "@/api/users";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  users: [],
  user: {},
};

const actionGetUsers = createAsyncThunk("user/actionGetUsers", async () => {
  const response = await getAllUser();
  return response.data;
});

const actionRegister = createAsyncThunk(
  "user/actionRegister",
  async (data: IUsers) => {
    const response = await userRegister(data);
    return response.data;
  }
);

const actionGetUserId = createAsyncThunk(
  "user/actionGetUserId",
  async (id: string) => {
    const response = await getUserId(id);
    return response.data;
  }
);

const actionUpdateUser = createAsyncThunk(
  "user/actionUpdateUser",
  async (data: IUsers) => {
    const id: any = localStorage.getItem("userId");
    const response = await updateUser(data, id);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionGetUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(actionRegister.fulfilled, () => {});
    builder.addCase(actionGetUserId.fulfilled, (state, action) => {
      state.user = { ...action.payload };
      console.log(state.user);
    });
    builder.addCase(actionUpdateUser.fulfilled, (state, action) => {
      state.users = [...state.users, action.payload];
    });
  },
});

export { actionGetUsers, actionRegister, actionGetUserId, actionUpdateUser };

export default userSlice.reducer;
