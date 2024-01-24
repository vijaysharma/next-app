import { NextRequest, NextResponse } from 'next/server';
import schema from './schema';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log('====products===', body);
  // If name or price is missing
  if (!body.name || !body.price)
    return NextResponse.json(`Either 'name' or 'price' is missing.`, {
      status: 400
    });
  // If ID provided
  if (body.id)
    return NextResponse.json(
      `'Id' has been provided. Please remove the id to add a new product.`,
      { status: 400 }
    );
  // If an exisiting product found
  const product = await prisma.product.findUnique({
    where: { name: body.name }
  });
  if (product)
    return NextResponse.json(`Product - ${product.name} already exists`, {
      status: 400
    });
  // validate the request body
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: parseFloat(body.price)
    }
  });

  return NextResponse.json(newProduct, { status: 201 });
}
