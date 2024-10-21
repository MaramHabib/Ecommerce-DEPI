import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AdminPage from "./pages/AdminPage";
import { Routes, Route ,Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";



function App() {
  const{user}=useUserStore();

  return (
    <div className='min-h-screen bg-gray-900 text-white relative overflow-hidden'>
      <h1 className='text-red-500 text-5xl'> Hello World</h1>

      <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute inset-0'>
            <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
          </div>
      </div>

      <div className='relative z-50 pt-20'>
          <Navbar/>  
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/signup" element={<SignUpPage />}/>
            <Route path="/login" element={!user ? <LoginPage /> : <Navigate to='/' />}/>
            <Route
						path='/secret-dashboard'
						element={ <AdminPage /> } 
					/>    
          </Routes>
      </div>
      <Toaster />

      {/* element={user?.role === "user" ? <AdminPage /> : <Navigate to='/login' />} */}


        


    </div>
    

  )
}

export default App;
