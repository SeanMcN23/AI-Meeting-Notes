import type {ReactNode} from 'react';

import Header from "../components/Header.tsx"
import Sidebar from "../components/Sidebar.tsx"


interface AppLayoutProps{
    children: ReactNode;
}

function AppLayout ({children}: AppLayoutProps){
    return(
        <div className= "app-layout">
            <Sidebar/>

            <main className= 'main-content'>
                <Header />

                <section className= "page-content">{children}</section>


            </main>

        </div>


    );

}
export default AppLayout;
