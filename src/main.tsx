import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import  { BrowserRouter } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import { ClerkProvider } from "@clerk/react";


registerSW({immediate:true})
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
  
  >
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ClerkProvider>,
);
