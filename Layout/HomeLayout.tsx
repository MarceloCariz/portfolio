import { Dispatch, SetStateAction, FC, PropsWithChildren} from "react";
import Head from "next/head";
import { Footer, Navbar } from "@/components/ui";


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
    
}

export const HomeLayout:FC<PropsWithChildren<Props>> = ({children, title, pageDescription, imageFullUrl, setIsOpen, isOpen}) =>{

    return(
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription}/>
                <meta name="og:title" content={title}/>
                <meta name="og:description" content={pageDescription}/>

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }
            </Head>

            <nav>
                <Navbar setIsOpen={setIsOpen} isOpen={isOpen}/>
            </nav> 

            <main style={{
                margin: '100px auto',
                maxWidth: '1440px',
                padding: '0px 20px'
            }}>
                {children}
            </main>

            <footer>   
                <Footer/>
            </footer>

        </>
    )

}