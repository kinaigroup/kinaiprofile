import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'PT KINAI (Kincir Angin Indonesia) — Grow Together, Better Every Day',
  description:
    'Website resmi PT KINAI (Kincir Angin Indonesia), grup bisnis Indonesia yang bergerak di bidang manufaktur garmen, manufaktur makanan dan minuman, energi, serta konsultansi data dan operasional.',
  openGraph: {
    title: 'PT KINAI (Kincir Angin Indonesia) — Grow Together, Better Every Day',
    description:
      'Grup bisnis Indonesia dengan keunggulan di bidang manufaktur garmen, manufaktur makanan dan minuman, energi, serta konsultansi data dan operasional.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT KINAI (Kincir Angin Indonesia)',
    description:
      'Grow Together, Better Every Day — Manufaktur Garmen, Makanan & Minuman, Energi, serta Konsultansi Data & Operasional.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#FAFAF9] text-[#1C1E1B] antialiased selection:bg-emerald-900 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
