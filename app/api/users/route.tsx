import { NextRequest, NextResponse } from 'next/server';
// import { data } from './userData';
import prisma from '../../../prisma/client';
import schema from './schema';

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
  // Step 1
  // Validate the incoming data
  // If invalid return 400
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email
    }
  });
  return NextResponse.json(user, { status: 201 });
}
