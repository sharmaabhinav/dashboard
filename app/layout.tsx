import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(inter.className)
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
