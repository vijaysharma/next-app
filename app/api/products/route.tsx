import { NextRequest, NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    name: 'Milk',
    price: 2.5
  },
  {
    id: 2,
    name: 'Bread',
    price: 3.5
  }
];

export function GET(request: NextRequest) {
  return NextResponse.json(data, { status: 200 });
}
