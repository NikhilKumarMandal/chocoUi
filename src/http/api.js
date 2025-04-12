import { api } from "./client";

export const feedback = (credentials ) => api.post("/api/feedback", credentials);