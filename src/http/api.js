import { api } from "./client";

export const feedback = (credentials) => api.post("/api/feedback", credentials);

export const contact = (credentials) => api.post("/api/contact", credentials);
