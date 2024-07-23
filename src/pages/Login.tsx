/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import { FcGoogle } from "react-icons/fc";
import Footer from "../components/Footer";

function Login() {
  const Navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log(token);
  if (token) {
    Navigate('/')
  }
  if (!token) {
    Navigate('/login')
  }
  const handleGoogleLogin = (e: any) => {
    console.log("login")
    // window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com";
    e.preventDefault();
    Navigate('/onebox');


  };

  return (
    <div className=" bg-gray-950  grid grid-rows-[auto_1fr_auto] gap-4  h-screen justify-center items">
      <AppBar />
      <div className="  flex items-center justify-center pt-[43%]">

        <div className="bg-gradient-to-r from-[#111214] to-[#121212] ... border-[#343A40] border-2 text-white py-[60px] px-[100px] rounded-[15px] shadow-lg">
          <div className="mb-10">
            <h2 className="text-2xl font-bold p-2 flex items-center justify-center">Create a New Account</h2>
          </div>
          <button className=" bg-[#111214] text-[#707172] py-3 px-[100px] mb-4 flex items-center justify-center border-2 border-[#707172] hover:bg-slate-100 " onClick={handleGoogleLogin}>
            <FcGoogle />
            <span className="pl-2">
              Sign Up with Google
            </span>
          </button>
          <div className=" flex items-center justify-center mt-8">
            <button className=" bg-gradient-to-r from-[#4B63DD] to-[#0524BF] ... p-[50px] text-white py-4 px-10 rounded-sm mb-4 hover:from-blue-600 hover:to-blue-800">
              Create an Account
            </button>
          </div>
          <p className="mt-6 text-gray-500  flex items-center justify-center">Already have an account ? <a href="/login" className="text-blue-400 ml-2">Sign In</a></p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
