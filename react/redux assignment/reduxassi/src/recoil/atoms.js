import { atom } from "recoil";

export const todoListState = atom({
    key: "todoListState",
    default: [{ id: 1, text: 'learn recoil for state mangement', completed: false }],
});