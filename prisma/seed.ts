import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const electronics = await prisma.category.create({
    data: {
      name: 'Electronics',
      description: 'Devices, gadgets, and accessories.',
    },
  });
  const fashion = await prisma.category.create({
    data: {
      name: 'Fashion',
      description: 'Clothing, shoes, and accessories.',
    },
  });
  const product1 = await prisma.product.create({
    data: {
      name: 'Smartphone',
      description: 'Latest model smartphone with amazing features.',
      price: 699.99,
      imageUrl: 'https://example.com/smartphone.jpg',
      categoryId: electronics.id,
      stock: {
        create: {
          quantity: 50,
        },
      },
    },
  });
  const product2 = await prisma.product.create({
    data: {
      name: 'Running Shoes',
      description: 'Comfortable and stylish running shoes.',
      price: 89.99,
      imageUrl: 'https://example.com/shoes.jpg',
      categoryId: fashion.id,
      stock: {
        create: {
          quantity: 100,
        },
      },
    },
  });
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      name: 'John Doe',
      password: 'securepassword123',
      isAdmin: false,
    },
  });
  const admin = await prisma.user.create({
    data: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: 'adminpassword123',
      isAdmin: true,
    },
  });
  const order1 = await prisma.order.create({
    data: {
      userId: user1.id,
      totalPrice: 699.99,
      status: 'Pending',
      orderItems: {
        create: [
          {
            productId: product1.id,
            quantity: 1,
            price: 699.99,
          },
        ],
      },
    },
  });
  console.log('Seeding finished.');
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
