import { NextResponse } from 'next/server'

export async function GET() {
  // Migrez ici la logique de votre ancien pages/api/salut.mjs
  return NextResponse.json({ message: 'Salut!' })
} 