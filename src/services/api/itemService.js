import axiosClient from "./axiosClient";

export async function fetchItems() {
    const res = await axiosClient.get("/items");
    return res.data;
}

export async function createItem(data) {
    const res = await axiosClient.post("/items", data);
    return res.data;
}

export async function deleteItem(id) {
    await axiosClient.delete(`/items/${id}`);
}

export async function updateItem(id, data) {
    const res = await axiosClient.put(`/items/${id}`, data);
    return res.data;
}