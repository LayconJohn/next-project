import Image from 'next/image'
import styles from './page.module.css'
import image from "../../public/we.jpeg"

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={`${styles.card}`}>
        <h2>teste</h2>
        <Image 
          src={image}
          alt="A gente"
          width={100}
          height={100}
          objectFit='cover'
          objectPosition='center'
        />
        <p>teste2</p>
        <span>teste3</span>
      </div>



    </main>
  )
}
