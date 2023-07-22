import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';


export default function Navbar() {
  return (
    <header>
      <Link className={styles.logo} to='/'>
        <h1>TRENDIT</h1>
      </Link>
      <nav className={styles.wrap}>
        <Link to='/trend'>
          트렌드
        </Link>
        <Link to='/shopping'>
          쇼핑정보
        </Link>
        <Link to='/community'>
          커뮤니티
        </Link>
        <Link to='/daily'>
          데일리룩
        </Link>

        <input type="search" />
        <Link to='/login'>
          로그인
        </Link>
        
      </nav>
    </header>
  );
}

