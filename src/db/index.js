// Memanggil Prisma Client, Folder yang sudah di generate saat kita lakuan generate
// Saat Membuat Model di Schema Jangan Lupa Generate Untuk Store Ke DB
const {PrismaClient} = require("../generated/prisma")

const prisma = new PrismaClient()

module.exports = prisma;