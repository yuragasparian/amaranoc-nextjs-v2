import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>
      <hr />
      <div className="grid gap-6">
        <div className="grid gap-2">

          <Input id="email" type="email" placeholder="Email" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
       
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" placeholder="Password" required />
        </div>
        <Button type="submit" size={"base"} variant={"orange"} className="w-full">
          Sign in
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Login with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/register" className="underline underline-offset-4 text-orange-400">
          Sign up
        </a>
      </div>
    </form>
  );
}
