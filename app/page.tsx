import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log({ session });
  return (
    <main>
      <h1>
        Hello{" "}
        {session && (
          <span>
            {session.user?.name ? session.user?.name : session.user?.email}
          </span>
        )}
      </h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
