import Link from 'next/link';
import Layout from '../components/layout';

export default function HomePage() {
  const LinkText = 'To Sample Page';
  return (
    <Layout>
      <h1>Home Page</h1>
      <Link href="/sample-page/sample-page">{LinkText}</Link>
    </Layout>
  );
}
