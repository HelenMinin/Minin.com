import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Social } from '../components/Social'
import { Container } from '../styles/pages/Home'
import avatarImg from '../assets/avatar.jpg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Minin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="avatar">
          <Image alt="Avatar" src={avatarImg} objectFit="contain" />
        </div>

        <h1>Hélen Minin</h1>

        <span className="description">
          Desenvolvedora back-end na {''}
          <Link href="https://pagar.me" passHref>
            <a target="_blank">
              <strong>Pagar.me</strong>
            </a>
          </Link>
        </span>

        <Social />
      </Container>
    </>
  )
}
