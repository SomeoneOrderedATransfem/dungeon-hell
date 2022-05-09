import styles from '../styles/index.module.scss';
import Link from 'next/link';

function Index() {
  return (
    <>
      <div className={`${styles.navBar} text-xl bold bg-neutral-800 sticky backdrop-blur-sm`}>
        <span id={styles.left} className="grid-flow-col inline-flex">
        <Link href="/">
          <span id={styles.logoContainer}>
            <img id={styles.logo} src='./images/index.tsx/logo.svg' alt="logo" />
            <h3>DungeonHell</h3>
          </span>
        </Link>
        <Link href="/download">
          <h3 className={styles.navItem}>Download</h3>
        </Link>
        </span>
        <span id={styles.right} className="grid-flow-col inline-flex">
          <Link href='/register'><h3 className={styles.navItem}>Register</h3></Link>
        </span>
      </div>
      <h4>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/></h4>
    </>
  )
}

export default Index;