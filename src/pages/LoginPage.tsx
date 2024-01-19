import React from "react";

export default function LoginPage() {
  return (
    <>
      <h1 className="font-insta text-3xl">Instawish</h1>
      <form className="flex flex-col items-center justify-center w-full gap-3">
        <input
          type="text"
          placeholder="Username ..."
          className="input input-bordered w-full max-w-xs"
          defaultValue={"test4"}
        />
        <input
          type="password"
          placeholder="Password ..."
          defaultValue={"Azerty12345"}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          className="btn btn-primary w-full max-w-xs"
          value="Login"
        />
      </form>
    </>
  );
}
