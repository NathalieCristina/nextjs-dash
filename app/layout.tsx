import '@/app/ui/global.css'; //ya pueden usar todas las paginas el tailwind
import { inter } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
