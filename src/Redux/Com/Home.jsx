import React from 'react';
import CardList from './CardList';
import Header from './Header';

function Home() {

    return (
        <>
            <Header />
            <CardList></CardList>
        </>
    )

}

export default React.memo(Home);