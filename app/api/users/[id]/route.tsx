import { NextRequest, NextResponse } from 'next/server';
import { data } from '../userData';
import schema from '../schema';

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const paramId = parseInt(id);
  if (paramId > 10)
    return NextResponse.json(
      { error: `User not found for the given id = ${id}` },
      { status: 404 }
    );
  const user = data.filter((u: any) => parseInt(u.id) === paramId);
  return NextResponse.json(user[0], { status: 200 });
}

// Use PUT for replacing an object
// Use PATCH for modifying 1 or more properties of an object

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const paramId = parseInt(id);
  // Step 1
  // Validate the incoming data
  // If invalid return 400
  if (paramId > 10)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const body = await request.json();

  //   Using Zod to validate the request body
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  // Step 2
  // Fetch the user with given id
  // if not found, return 404
  const user = data.filter((u: any) => u.id === parseInt(id));

  // Step 3
  // If found, update the user and return
  return NextResponse.json({ id, name: body.name }, { status: 200 });
}
