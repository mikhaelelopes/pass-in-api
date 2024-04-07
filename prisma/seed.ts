import { prisma } from '../src/lib/prisma'

async function seed(){
  await prisma.event.create({
    data: {
      id: 'b0a82495-3515-4690-a73a-2553e5cbefa6',
      title: 'Unite Summit',
      slug: 'unite-summit',
      details: 'Um evento pra devs apaixonados por código!',
      maximumAttendees: 120,
    }
  })
}

seed().then(() => {
  console.log('Seeded successfully!')
  prisma.$disconnect()
})