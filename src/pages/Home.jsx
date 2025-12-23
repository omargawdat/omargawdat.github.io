import { useEffect } from 'react';
import Aos from 'aos';
import Brands from '../components/Brands';
import Projects from '../components/Projects';
// import Testimonial from '../components/Testimonial';
import Hero from '../components/Hero';
import About from '../components/About';
import Service from '../components/Service';
import HomePagdData from '../data/HomePagdData.json';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
    useEffect(() => {
        Aos.refresh();
    }, []);

    const {
        hero,
        socialBtns,
        brands,
        about,
        projects,
        service,
        experience,
        // testimonial,
        contact,
    } = HomePagdData;
    return (
        <>
            <Hero data={hero} socialData={socialBtns}/>
            <Projects data={projects}/>
            <Experience data={experience}/>
            <Brands data={brands}/>
            <About data={about}/>
            <Service data={service}/>
            {/*<Testimonial data={testimonial} />*/}
            <Contact data={contact} socialData={socialBtns}/>
        </>
    );
}
