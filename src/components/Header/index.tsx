import Link from "next/link";
import Image from "next/image";

import { SignInButton } from "../SignInButton";

import styles from "./styles.module.scss";
import { ActiveLink } from "../ActiveLink";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" width={150} height={150} alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} prefetch href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} prefetch href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
