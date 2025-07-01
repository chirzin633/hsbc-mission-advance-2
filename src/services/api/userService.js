import axiosClient from "./axiosClient";

export async function fetchUsers() {
    const res = await axiosClient.get("/users");
    return res.data;
}

export async function createUser(data) {
    const res = await axiosClient.post("/users", data);
    return res.data;
}

export async function findUserByEmail(email) {
    const users = await fetchUsers();
    return users.find((u) => u.email.toLowerCase() === email.trim().toLowerCase());
}