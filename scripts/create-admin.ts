const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'arovner@dial-law.com'
  const password = process.env.ADMIN_PASSWORD
  const name = process.env.ADMIN_NAME || 'Admin User'

  if (!password) {
    console.error('ADMIN_PASSWORD environment variable is required.')
    console.error('Example: ADMIN_PASSWORD="your-strong-password" npm run create-admin')
    process.exit(1)
  }

  if (password.length < 12) {
    console.error('ADMIN_PASSWORD must be at least 12 characters.')
    process.exit(1)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword, name },
    create: {
      email,
      password: hashedPassword,
      name,
      role: 'admin',
    },
  })

  console.log(`Admin user upserted: ${user.email}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
