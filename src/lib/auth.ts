import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'dev-secret-key';

export interface AuthPayload {
  userId: string;
  email: string;
  role: string;
}

export function getAuth(request: NextRequest): AuthPayload | null {
  try {
    const token = request.cookies.get('authToken')?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthPayload;
    return decoded;
  } catch (error) {
    return null;
  }
}
