import { defineStore } from "pinia";

interface State {
  user: UserInfo | null;
}

export const useUserStore = defineStore("user", {
  state: (): State => ({
    user: null,
  }),
});

interface UserInfo {
  id: number;
  username: string;
  countryCode: number;
  tel: number;
  email: string;
  // ...
}
