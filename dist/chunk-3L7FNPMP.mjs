// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client/extension";
var prisma = new PrismaClient({
  log: ["query"]
});

export {
  prisma
};
