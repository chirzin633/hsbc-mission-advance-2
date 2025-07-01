import { fetchUsers } from "./userService";

export async function loginWithEmail(email, password) {
    const users = await fetchUsers();
    return users.find((u) => u.email === email && u.password === password);
}