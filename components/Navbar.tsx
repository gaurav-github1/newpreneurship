import Link from "next/link";
import Image from "next/image";
import { signIn,signOut,auth } from "@/auth";

export default async function Navbar() {
  const session = await auth(); 

  return (
    <header className="px-5 py-3 bg-white shadow-md font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/logo.jpg" alt="logo" width={60} height={30} className="rounded-full" />
        </Link>
        <div className="flex items-center gap-4 text-black">
          {session && session?.user?(
            <>
              <Link href="/startup/create">
                <span>Create Startup</span>
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({redirectTo: "/"});
                }}
              >
                <button type="submit">Sign Out</button>
              </form>

              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ): (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit">Sign In</button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
