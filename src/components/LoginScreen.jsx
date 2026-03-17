import { DollarSign, Lock, User } from "lucide-react";

const LoginScreen = ({ onLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
        <div className="mb-8 flex flex-col items-center">
          <div className="mb-3 rounded-xl bg-zinc-900 p-3">
            <DollarSign className="text-white" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900">
            Cash Flow Dashboard
          </h1>

          <p className="mt-1 text-zinc-600">Sign in to manage your budget</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>

            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="text-zinc-400" size={18} />
              </div>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="demo@expendtracker.com"
                className="block w-full rounded-md border border-zinc-300 py-2 pr-3 pl-10 placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-700"
            >
              Password
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock size={18} className="text-zinc-400" />
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="Enter your password"
                className="block w-full rounded-md border border-zinc-300 py-2 pr-3 pl-10 text-sm placeholder:text-zinc-400 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md border border-transparent bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors duration-75 hover:bg-zinc-700 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
            >
              Sign In to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
