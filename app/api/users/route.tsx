import { NextRequest, NextResponse } from 'next/server';
import { data } from './userData';

export async function GET(request: NextRequest) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve('I am done');
    }, 3000);
  });
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  // Step 1
  // Validate the incoming data
  // If invalid return 400
  if (!body.name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  return NextResponse.json(
    { id: new Date().getTime(), name: body.name },
    { status: 201 }
  );
}
