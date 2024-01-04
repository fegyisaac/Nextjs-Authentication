import Link from "next/link";

const LoginForm = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white pt-8 px-8 pb-7 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
          <p className="text-gray-600 text-center mb-6">Enter the details.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="hello@alignui.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                required
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>
          <div className="w-fit bg-red-500 text-white text-sm py-1 px-3 rounded-md mt-3">
            Error message
          </div>
          <Link href={"/register"} className="text-[12px] text-right mt-6">
            <div>
              Don't have an account? <span className="underline">Register</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
