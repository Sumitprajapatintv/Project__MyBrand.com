import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";
import { Toaster } from 'react-hot-toast';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children,title,description,keyword,author }) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description}/>
                <meta name="keywords" content={keyword}/>
                <meta name="author" content={author}/>
                <title>{title}</title>
                
            </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}
      <Toaster />
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps={
  title:"MYBRAND.COM--Shop Now",
  description:"Branded Item",
  keyword:"mern,react,node,mongodb",
  author:"Sumit Prajapati"



}

export default Layout;