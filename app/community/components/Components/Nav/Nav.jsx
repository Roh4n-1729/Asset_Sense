// import styles of this component
import styles from "./Nav.module.css";
import Link from "next/link";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from 'next/navigation'
import axios from 'axios'


// Nav component
const Nav = () => {
  const router = useRouter();
  
  const Uploadhandler =async (result)=>{
    const url = result.info.url
    const res = await axios.post("/api/community",{url})
    router.refresh()
  }

 



  return (
    <nav className={`${styles.nav} flex items-center`}>
      <h1 className={styles["nav-title"]}>Gallery</h1>
      <ul className={`flex items-center gap-5 ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>

          <Link href="/" className={styles["nav-link"]}>
            Home
          </Link>
        </li>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <div className={styles["nav-link"]}>
          <CldUploadButton uploadPreset="kajdyoxr" onUpload={Uploadhandler}  />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;