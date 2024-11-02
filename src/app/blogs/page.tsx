




import FeaturedBlogPosts from '@/components/FeaturedBlogPost2';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

//import CallToAction from '../components/home/CallToAction';
//import ClientRedirect from '../components/home/ClientRedirect'; // Import the ClientRedirect component


export default function Home() {


  return (
    <div className="flex flex-col min-h-screen pt-12">
      <Header />
      <main className="flex-1">
       {/* <HeroSection /> */}
        <FeaturedBlogPosts />
      
     
       
      </main>
      <Footer />
    </div>
  );
}

