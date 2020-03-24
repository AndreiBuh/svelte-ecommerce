import { writable } from "svelte/store";

const userStore = writable({ username: null, jwt: null });

export default userStore;
