import SignInButton from "@/components/auth/sign-in";

export default function SignInPage() {
  return (
    <>
      <div className="flex flex-col pb-10 space-y-4 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in Your Account
        </h1>
        <p className="text-sm py-2 text-muted-foreground">
          We Prefer Password less Sign In / Sign Up
        </p>
        <SignInButton />
      </div>
    </>
  );
}
