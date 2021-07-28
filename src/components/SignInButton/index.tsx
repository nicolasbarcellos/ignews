import { signIn, signOut, useSession } from "next-auth/client";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub size="24" color="#04D361" />
      {session.user.name}
      <FiX onClick={() => signOut()} color="#737380" size="24" />
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub size="24" color="#EBA417" />
      Sign in with GitHub
    </button>
  );
}
