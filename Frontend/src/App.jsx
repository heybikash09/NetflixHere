import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Home from "./HomePage/Home";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import WatchPage from "./HomePage/WatchPage";
import SearchPage from "./Search/searchPage";

function App() {

  const { user, isChekingAuth, authCheck } = useAuthStore();
  console.log("authenticated user -->", user);
  useEffect(() => {
    authCheck();
  }, [authCheck]);
  if (isChekingAuth) {
    console.log("Heyyyy !!");
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10" />
        </div>
      </div>
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={!user ? <Signup /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="signin"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
