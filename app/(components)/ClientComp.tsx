"use client";
import { signIn, signOut } from "next-auth/react";

export default function ClientComponent({ session } : any) {
  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user.name || "User"}!</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
      )}
    </div>
  );
}
