import {useState} from 'react';
import Header   from "./Header";

const Login = () => {
	let [isSignUpForm, setIsSignUpForm] = useState(true);

	let toggleSignUpForm = (() => {	setIsSignUpForm(!isSignUpForm)})

	return (
		<div>
			<Header />
			<div className="absolute w-full">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="backgroundImg"
				/>
			</div>
			<form className="px-6 py-2 text-white relative bg-black top-44 mx-auto w-[26%] bg-opacity-85">
				<h1 className="text-3xl font-semibold py-5">
					{isSignUpForm ? 'Sign In' : 'Sign Up'}
				</h1>
				<input
					type="text"
					placeholder="Email or phone number" 
					className="p-3 mx-auto w-full my-2 rounded bg-[#333] focus:placeholder-red-700 "
				/>
				{ !isSignUpForm ?
				<input
					type="text"
					placeholder="Full name" 
					className="p-3 mx-auto w-full my-2 rounded bg-[#333] focus:placeholder-red-700 "
				/> : ''
				}
				<input
				
					type="password"
					placeholder="Password" 
					className="p-3 mx-auto w-full my-2 rounded bg-[#333]"
				/>
				<button className="p-4 mx-auto my-6 w-full bg-red-700 rounded text-white">
					{isSignUpForm ? 'Sign In' : 'Sign Up'}
				</button>
				<label>
					<input type="checkbox"/> Remeber Me
				</label>
		      	<p className="text-base cursor-pointer my-6"
					onClick={toggleSignUpForm}
				>
					{isSignUpForm ? 'New to Netflix ? Sign up now.' : 'Alreay a User? Sign In now.'}
				</p>
			</form>
		</div>
	)
}

export default Login