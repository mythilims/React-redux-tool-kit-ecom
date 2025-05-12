import React from 'react';
import CardList from './CardList';
import Header from './Heder';

function Das() {

    return (
        <>
            <Header />
            <CardList></CardList>
        </>
    )

}

export default React.memo(Das);