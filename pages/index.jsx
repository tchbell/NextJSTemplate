import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function HomePage() {
  <Head>
    <title>Create React App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return (
    <div className={styles.container}>
      <h1>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
    </div>
  );
}
