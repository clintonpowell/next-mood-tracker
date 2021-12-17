import { useState } from 'react';
import styles from 'styles/Paging.module.css';
import { getEntries } from './api';

export default function Paging({ pageCount, page, size, sort, callback:setEntries }) {
  let [pageState, setPage] = useState(page);
  
  async function navigatePage(page) {
    if(page < 0 || page >= pageCount) {
      return;
    }
    const { entries } = await getEntries(page, size, sort);
    setEntries(entries);
    setPage(page);
  }
  return (
    <div className={`${styles.pages} ${pageCount === 1 ? styles.hidden : ''}`}>
      <button onClick={() => navigatePage(pageState-1)} className={`${styles.prev} ${pageState === 0 ? styles.disabled : ''} btn`}>&lt;</button>
      <span>page {pageState+1} of {pageCount}</span>
      <button onClick={() => navigatePage(pageState+1)} className={`${styles.next} ${pageState === pageCount-1 ? styles.disabled : ''} btn`}>&gt;</button>
    </div>
  );
}