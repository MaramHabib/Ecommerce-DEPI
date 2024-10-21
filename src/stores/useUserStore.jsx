import {create} from "zustand";
//import axios from "../lib/axios";
import {toast} from "react-hot-toast";
import axios from "axios";

export const useUserStore = create((set,get) => ({
    user: null,
    loading: false,
    checkingAuth:true,
   
	signup: async ({ name, email, password, confirmPassword ,confirmed }) => {
		//set({ loading: true });
    console.log({ name, email, password, confirmPassword });
		if (password !== confirmPassword) {
			set({ loading: false });
			confirmed =="true";
			return toast.error("Passwords do not match");
		}

		try {
            const apiUrl = 'https://ecommerce19-ten.vercel.app/users/signup';
  
			const res = await axios.post(apiUrl, { name, email, password , confirmed});
			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},

	login: async ( email,password ) => {
		set({ loading: true });
    	console.log({ email, password});

		try {
            const apiUrl = 'https://ecommerce19-ten.vercel.app/users/signin';
  
			const res = await axios.post(apiUrl, {email,password});
			console.log("user is Here")
			set({ user: res.data, loading: false });
			//console.log('Login successful:', res.data);
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},
}))