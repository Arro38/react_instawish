import React from "react";
import { login } from "../lib/ApiService";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    const isLogged = await login(username, password);
    setLoading(false);
    if (isLogged) {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-insta text-3xl">Instawish</h1>
      {loading ? (
        <p className=" animate-pulse text-2xl">Loading ...</p>
      ) : (
        <form
          className="flex flex-col items-center justify-center w-full gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Username ..."
            className="input input-bordered w-full max-w-xs"
            defaultValue={"test4"}
            name="username"
          />
          <input
            type="password"
            placeholder="Password ..."
            defaultValue={"Azerty12345"}
            className="input input-bordered w-full max-w-xs"
            name="password"
          />
          <input
            type="submit"
            className="btn btn-primary w-full max-w-xs"
            value="Login"
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
}
