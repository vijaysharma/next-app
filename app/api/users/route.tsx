import { NextRequest, NextResponse } from 'next/server';
// import { data } from './userData';
import schema from './schema';
import prisma from '@/prisma/client';

// export async function GET(request: NextRequest) {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('I am done');
//     }, 3000);
//   });
//   return NextResponse.json(data, { status: 200 });
// }

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   // Step 1
//   // Validate the incoming data
//   // If invalid return 400
//   if (!body.name)
//     return NextResponse.json({ error: 'Name is required' }, { status: 400 });
//   return NextResponse.json(
//     { id: new Date().getTime(), name: body.name },
//     { status: 201 }
//   );
// }

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.id)
    return NextResponse.json('Id is not required and has to be removed.');

  const user = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: body.email
        },
        {
          username: body.username
        }
      ]
    }
  });
  if (user[0]) return NextResponse.json('User already exists');
  // Step 1
  // Validate the incoming data
  // If invalid return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      username: body.username,
      email: body.email,
      phone: body.phone,
      company: body.company,
      followers: body.followers,
      isActive: body.isActive,
      isAdmin: body.isAdmin
    }
  });
  return NextResponse.json(newUser, { status: 201 });
}
