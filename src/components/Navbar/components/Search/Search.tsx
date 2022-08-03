import React, { memo } from 'react';
import { BsSearch } from 'react-icons/bs';

import { SearchResultWindow } from '../SearchResultWindow/SearchResultWindow';

import styles from './Search.module.css';

export const Search = memo(() => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [page, setPage] = React.useState<number>(1);


    return (
        <div>
            <div className={styles.search}>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }}
                    id="search"
                />
                <BsSearch id={styles.search_icon} />
            </div>

            {searchQuery.length >= 1 && (
                <SearchResultWindow
                    searchQuery={searchQuery}
                    page={page}
                    setPage={setPage}
                />
            )}
        </div>
    );
});
