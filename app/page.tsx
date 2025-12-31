import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome</h1>
            <p className="text-gray-600">Get started with your account</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <Link
              href="/signin"
              className="w-full py-4 px-8 text-center font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-200"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="w-full py-4 px-8 text-center font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 hover:scale-105 transform transition-all duration-200"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
