import './globals.css';

export const metadata = {
  title: 'RestaurantePro',
  description: 'Sistema de gestão para restaurantes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
