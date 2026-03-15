import { DollarSign, Lock, User } from "lucide-react"

const LoginScreen = ({onLogin}) => {
    const handleLogin = (e) => {
        e.preventDefault();
        onLogin();
    }


  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100">
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
                <div className="bg-zinc-900 p-3 rounded-xl mb-3">
                    <DollarSign className="text-white" size={24} />
                </div>
                <h1 className="text-3xl font-bold text-zinc-900">
                    Cash Flow Dashboard
                </h1>

                <p className="text-zinc-600 mt-1">
                    Sign in to manage your budget
                </p>     
            </div>
            {/* Form */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        {/* email */}
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                        Email Address
                        </label>


                       {/* input */}
                       <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="text-zinc-400" size={18} />
                            </div>
                            <input type="email" name="email" required defaultValue="demo@expendtracker.com" className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                       </div>
                    </div>
                    
                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                            Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            {/* head */}
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock size={18} className="text-zinc-400"/>
                            </div>
                            <input type="password" name="password" id="password" required defaultValue="password" className="block w-full pl-10 pr-3 py-2 border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"/>

                        </div>
                    </div>

                    {/* login button */}
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-colors duration-75">
                            Sign In to Dashboard
                        </button>
                    </div>

                </form>
        </div>
    </div>
  )
}

export default LoginScreen
