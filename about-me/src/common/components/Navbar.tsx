"use client"

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

interface NavbarProps {
    navbarItems: {
        name: string,
        href: string,
    }[]
}

export default function Navbar({ navbarItems }: NavbarProps): JSX.Element {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(prev => !prev);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Logo
            </div>

            {/* Hamburger button */}
            <div className={styles.hamburger} onClick={handleToggle}>
                Hamburger
            </div>

            {/* ul */}
            <ul className={`${styles.ul} ${menuOpen ? styles.show : styles.hide}`}>
                {navbarItems.map(item => (
                    <li key={item.name} className={styles.li}>
                        <Link href={item.href} className={styles.a}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}