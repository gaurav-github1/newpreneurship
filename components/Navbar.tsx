import Link from "next/link";
import Image from "next/image";
import { signIn,signOut,auth } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export default async function Navbar() {
  const session = await auth(); 

  return (
    <header className="px-5 py-3 bg-white shadow-md font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="Newpreneurship Logo" 
            width={40} 
            height={40} 
            className="rounded-lg"
            priority
          />
          <span className="max-sm:hidden text-black">Newpreneurship</span>
        </Link>
        <div className="flex items-center gap-4 text-black">
          {session && session?.user?(
            <>
              <div className="flex items-center gap-4">
                <Link href="/startup/create">
                  <span className="max-sm:hidden">Create Startup</span>
                  <BadgePlus className="size-6 sm:hidden text-green-500" />
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({redirectTo: "/"});
                  }}
                >
                  <button type="submit" className="flex items-center gap-2">
                    <span className="max-sm:hidden">Sign Out</span>
                    <LogOut className="size-6 sm:hidden text-red-500" />
                  </button>
                </form>

                <Link href={`/user/${session?.id}`} className="flex items-center gap-2">
                  <Avatar className="size-10" >
                    <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""}/>
                    <AvatarFallback>{session?.user?.name?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                </Link>
              </div>
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
