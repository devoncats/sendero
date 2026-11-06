import type { Session } from "@sendero/auth";
import type { Database } from "@sendero/db";

export type Context = {
  session: Session | null;
  db: Database;
};
