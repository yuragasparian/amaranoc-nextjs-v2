"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  fullName: string;
  phone: number;
  email: string;
  password: string;
};

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const schema: ZodType<FormData> = z.object({
    fullName: z.string().min(3),
    phone: z.number(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const submitData = (data: FormData) => {
    console.log(data);
  };

  const ErrorMessage = ({msg}:{msg:string | undefined}) => (
    <span className="text-xs text-red-400">{msg}</span>
  )
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Register</h1>
      </div>
      <hr />
      <div className="grid gap-4">
        <div className="grid gap-2">
        {errors.fullName && <ErrorMessage msg={errors.fullName.message} />}
          <Input
            id="name"
            type="text"
            placeholder="Full name"
            required
            {...register("fullName")}
          />
        </div>
        <div className="grid gap-2">
        {errors.phone && <ErrorMessage msg={errors.phone.message} />}
          <Input
            id="phone"
            type="number"
            placeholder="Phone number"
            required
            {...register("phone", { valueAsNumber: true })}
          />
        </div>
        <div className="grid gap-2">
        {errors.email && <ErrorMessage msg={errors.email.message} />}
          <Input
            id="email"
            type="email"
            placeholder="Email"
            required
            {...register("email")}
          />
        </div>
        <div className="grid gap-2">
        {errors.password && <ErrorMessage msg={errors.password.message} />}
          <Input
            id="password"
            type="password"
            placeholder="Password"
            required
            {...register("password")}
          />
        </div>
        <Button
          type="submit"
          size={"base"}
          variant={"orange"}
          className="w-full"
          onClick={handleSubmit(submitData)}
        >
          Sign up
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        <Button variant="outline" className="w-full">
          Sign up with GitHub
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a
          href="/login"
          className="underline underline-offset-4 text-orange-400"
        >
          Sign in
        </a>
      </div>
    </form>
  );
}
