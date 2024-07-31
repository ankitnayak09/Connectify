import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { useState } from "react";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	function handleLogin() {
		console.log("Function to be implemented");
	}
	function handleSignup() {
		console.log("Function to be implemented");
	}
	return (
		<div className="h-screen w-full flex items-center justify-center">
			<div className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
				<div className="flex flex-col gap-10 items-center justify-center">
					<div className="flex items-center justify-center">
						<h1 className="text-5xl font-bold md:text-6xl">
							Connectify
						</h1>
					</div>
				</div>
				<div className="flex items-center justify-center w-full">
					<Tabs>
						<TabsList className="w-full flex gap-x-5">
							<TabsTrigger value="Login">Login</TabsTrigger>
							<TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
						</TabsList>
						<TabsContent
							value="Login"
							className="flex flex-col gap-4 mt-5"
						>
							<Input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Button onClick={handleLogin}>Login</Button>
						</TabsContent>
						<TabsContent
							value="Sign Up"
							className="flex flex-col gap-4 mt-5"
						>
							<Input
								type="email"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="Password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<Input
								type="password"
								placeholder="Confirm Password"
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
							/>

							<Button onClick={handleSignup}>Sign Up</Button>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</div>
	);
};

export default Auth;
