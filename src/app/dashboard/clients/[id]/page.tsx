'use client';

import { useParams } from 'next/navigation';
import { ClientDetailView } from '@/components/client-detail-view';
import ProtectedLayout from '@/components/protected-layout';

export default function ClientPage() {
  const params = useParams();
  const clientId = params.id as string;

  return (
    <ProtectedLayout>
      <ClientDetailView clientId={clientId} />
    </ProtectedLayout>
  );
}
