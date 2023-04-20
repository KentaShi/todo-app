import { createContext } from "react";
const INITIAL_STATE = {
    count: 0,
};
export const TestContext = createContext(INITIAL_STATE);
