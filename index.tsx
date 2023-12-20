import { signIn, signOut, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  console.log(session);
  return (
    <div>
      {session.data ? <h1>Logged in</h1> : <h1>Logged Out</h1>}
      <h1
        onClick={() => {
          signIn();
        }}
      >
        Login
      </h1>
      <h1
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </h1>
    </div>
  );
}
