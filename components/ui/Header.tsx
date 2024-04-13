import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { RiLoader2Fill } from "../icons/RiLoader2Fill";
import { Button } from "./button";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image
            src="/logo-full.svg"
            height={42}
            width={179}
            alt="logo"
          />
        </div>
        <ClerkLoading>
          <RiLoader2Fill className="w-5 h-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              afterSignInUrl="/"
              afterSignUpUrl="/"
            >
              <Button variant={"ghost"}>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};

export default Header;
