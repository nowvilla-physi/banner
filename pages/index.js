import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import christmasSaleImg from '../public/images/christmas-sale.png'
import winterTrainingImg from '../public/images/winter-training.png'
import movingImg from '../public/images/moving.png'
import hamburgerImg from '../public/images/hamburger.png'
import sneakerImg from '../public/images/sneaker.png'
import halloweenImg from '../public/images/halloween.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>バナー一覧</title>
        <meta name='description' content='デザインしたバナの一覧です。' />
        <link rel='icon' href='favicon/favicon.svg' />
      </Head>

      <main>
          <section className={styles['banner-section']}>
              <h1 className={styles.title}>バナー一覧</h1>
              <div className={styles['banner-list']}>
                  <div className={styles['banner-item']}>
                      <Image src={christmasSaleImg} alt={'バナー'} width={560} height={315} />
                  </div>
                  <div className={styles['banner-item']}>
                      <Image src={winterTrainingImg} alt={'バナー'} width={560} height={315} />
                  </div>
                  <div className={styles['banner-item']}>
                      <Image src={movingImg} alt={'バナー'} width={560} height={315} />
                  </div>
                  <div className={styles['banner-item']}>
                      <Image src={hamburgerImg} alt={'バナー'} width={560} height={315} />
                  </div>
                  <div className={styles['banner-item']}>
                      <Image src={sneakerImg} alt={'バナー'} width={560} height={315} />
                  </div>
                  <div className={styles['banner-item']}>
                      <Image src={halloweenImg} alt={'バナー'} width={560} height={315} />
                  </div>
              </div>
          </section>
      </main>
    </div>
  )
}
