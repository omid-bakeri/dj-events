import Head from "next/head"
import Header from "./Header";
import Footer from "./Footer";


function Layout({title , keywords , description , children}){
    return <div>
        <Head>
            <title>
                {title}
            </title>
            <meta name={description} content={description}/>
            <meta name={keywords} content={description}/>
        </Head>
        <Header/>
        <img className="w-full" src="https://static.vecteezy.com/system/resources/previews/024/308/318/non_2x/cool-dj-with-headphones-illustration-ai-generative-free-photo.jpg"/>
            {children}
        <Footer/>
    </div>
}


Layout.defaultProps = {
    title : "DJ Events | Music For Everyone" ,
    description : "DJ Events for music and all play list for you" ,
    keywords : "music , dj , party , playlist",
}
export default Layout;

