import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? new PrismaClient()

// Cache on global so serverless (Vercel) reuses one client per instance and avoids connection exhaustion
globalForPrisma.prisma = prisma

export default prisma
