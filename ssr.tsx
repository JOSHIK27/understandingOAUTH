import { getServerSession } from "next-auth/next";
import { signIn, signOut } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
export default function Ssr({ x }) {
  console.log(x);
  return (
    <div>
      {x.user ? <h1>Logged in</h1> : <h1>Logged Out</h1>}
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

export async function getServerSideProps(context) {
  const x = await getServerSession(context.req, context.res, authOptions);
  console.log(x);
  if (!x) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      x,
    },
  };
}
