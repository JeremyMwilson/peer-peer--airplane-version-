import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

const Home = React.lazy(() => import("./pages/HomePage"));
const FAQ = React.lazy(() => import("./pages/faq"));
const PhotoUpload = React.lazy(() => import("./pages/photoUpload"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const PrivateForm = React.lazy(() => import("./pages/privateInsurance"));

const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;
const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
console.log("imported everything App...");
function AppRoutes() {
  console.log("Rendering App...");
  const navigate = useNavigate();

  return (
    <ClerkProvider
      frontendApi={frontendApi}
      publishableKey={publishableKey}
      navigate={(to) => navigate(to)}
    >
      <SignedIn>
        <BrowserRouter>
          <SidebarMenu>
            <React.Fragment>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/photoUpload" element={<PhotoUpload />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/private-insurance" element={<PrivateForm />} />
                </Routes>
              </React.Suspense>
            </React.Fragment>
          </SidebarMenu>
        </BrowserRouter>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function App() {
  console.log("Rendering App2...");
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
