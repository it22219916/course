"use client";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      epf: formData.get("epf"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      router.push("./");
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form
        className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-white rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-5 w-full text-2xl font-bold">Sign In</h1>
        {error && (
          <div className="w-full p-3 mb-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded">
            {error}
          </div>
        )}
        <label className="w-full text-sm">EPF Number</label>
        <input
          type="text"
          placeholder="EPF Number"
          className="w-full h-8 border border-solid border-black rounded p-2"
          name="epf"
        />
        <label className="w-full text-sm">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid border-black rounded p-2"
            name="password"
          />
        </div>
        <button className="w-full border border-solid border-black rounded">
          Sign In
        </button>

        <Link
          href="./register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black"
        >
          Don&apos;t have an account?
        </Link>
      </form>
    </section>
  );
}
