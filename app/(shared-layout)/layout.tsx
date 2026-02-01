import {Navbar} from '@/components/web/Navbar';

export default function SharedLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Navbar />
      <h2>TESTING @</h2>
      {children}
    </>
  );
}
