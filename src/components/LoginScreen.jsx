import { DollarSign, User } from "lucide-react"

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
                                <User className="text-zinc-400" size={20} />
                            </div>
                            <input type="email" name="email" required defaultValue="demo@cashflow.com" className="block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md focus:ring-blue-500 focus:border-blue-500"/>
                       </div>
                    </div>
                    
                    {/* Password */}
                    <div>
                        <label htmlFor="password"></label>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen
