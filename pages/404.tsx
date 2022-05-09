import Link from "next/link";
import styles from '../styles/404.module.scss'

export default function e404() {
    return (
        <>
            <div id="404" className="text-3xl content-center justify-center grid justify-items-center" style={{backgroundColor: 'rgb(38 38 38)' ,height: 100 + 'vh', padding: 30+'vh'}}>
                <img src="./images/404.tsx/door.svg" alt="404" style={{height: 30+'vh', marginBottom: 5+'vh'}} />
                <h1 style={{color: 'white'}}>404: Page not found</h1>
                <Link href="/"><h2 className={`${styles.h2} text-white`}>Return Home</h2></Link>
            </div>
        </>
    )
}