import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    const session = await getServerSession(authOptions);
    const cookieStore = cookies();
    const token = cookieStore.get('next-auth.session-token')?.value;
    if (session) {
      return NextResponse.json({ token });
    }
  } catch (error) {
    console.log('Internal Error', error);
    return NextResponse.json({ error });
  }
};
