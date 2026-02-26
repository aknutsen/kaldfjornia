import { NextRequest, NextResponse } from 'next/server'

interface ContactPayload {
  name: string
  email: string
  productInterest: string
  message: string
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (typeof body !== 'object' || body === null) return false
  const b = body as Record<string, unknown>
  return (
    typeof b.name === 'string' && b.name.trim().length >= 2 &&
    typeof b.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(b.email) &&
    typeof b.productInterest === 'string' && b.productInterest.trim().length > 0 &&
    typeof b.message === 'string' && b.message.trim().length >= 20
  )
}

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: 'Invalid or incomplete form data.' }, { status: 400 })
  }

  // TODO: wire up email sending (e.g. Resend, Nodemailer) when ready
  console.log('[Kaldfjornia] Contact form submission:', {
    name: body.name,
    email: body.email,
    productInterest: body.productInterest,
    timestamp: new Date().toISOString(),
    // message not logged for privacy
  })

  return NextResponse.json(
    {
      success: true,
      message: "Thank you! We'll be in touch within a few days.",
      submittedAt: new Date().toISOString(),
    },
    { status: 200 }
  )
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}
