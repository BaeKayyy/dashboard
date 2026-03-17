import { useState } from "react";
import DashboardLayout from "./components/DashboardLayout";
import LoginScreen from "./components/LoginScreen";

const AUTH_STORAGE_KEY = "cash-flow-is-logged-in";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  });

  const handleLogin = () => {
    try {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
    } catch {
      // Ignore storage failures and keep the in-memory auth state.
    }
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    } catch {
      // Ignore storage failures and keep the in-memory auth state.
    }
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardLayout onLogout={handleLogout} />
    </div>
  );
};

export default App;
