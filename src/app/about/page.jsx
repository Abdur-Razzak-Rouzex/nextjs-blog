import Image from "next/image";
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div className={styles.imgContainer}>
      <Image src="/about.png" alt="about image" fill/>
    </div>
  )
}

export default AboutPage