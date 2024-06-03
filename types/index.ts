import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerifield"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerifield: string | null;
};
