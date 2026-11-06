import { createAuth } from "@sendero/auth";
import { createDb } from "@sendero/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
