



import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email is required' }, { status: 400 });
        }

        // Log the received email
        console.log('Received email:', email);

        // Send success response
        return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
    } catch (error) {
        console.error('Error handling subscription:', error);
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
}
