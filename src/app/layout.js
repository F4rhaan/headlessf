import { Inter } from 'next/font/google';
import './styles/styles.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fetch Data',
};

const RootLayout = ({ children }) => {
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
};

export default RootLayout;