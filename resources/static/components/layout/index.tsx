import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <React.Fragment>
            {/*  Site header */}
            <header>
                <h1>PHP Rade with React, TypeScript, Tailwind and React Router</h1>
            </header>

            {/*  Page content */}
            <main className="flex-grow">

                {/*  Page sections */}
                <Outlet />

            </main>

            {/*  Site footer */}

        </React.Fragment>
    );
}

export default Layout;
