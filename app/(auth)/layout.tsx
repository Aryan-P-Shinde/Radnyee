import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-end items-center p-4 h-16">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
