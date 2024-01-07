import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-6 lg:p-12"  id="about">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl md:text-6xl font-bold font-serif mb-5">Siva{' '}
          <span className="text-custom-orange">Munaganuru</span>
        </h1>
        <div className="text-lg mb-10 font-serif">
          711 West Broadway Road · Tempe, AZ 85282 · (602) 875-9212 · {' '}
          <a href="mailto:smunagan@asu.edu?subject=Regarding&body=Hi Siva, I am contacting you regarding"
          className="text-custom-orange no-underline hover:underline" target="_blank" rel="noopener noreferrer">
            smunagan@asu.edu
          </a>
        </div>
        <p className="mb-10 font-mono">Computer science master’s student with 3 years of work experience in software development. Proficient in JavaScript, Python, C,
                  ReactJS, Node.js, and AWS. Experienced in microservices, API development, and CI/CD tools like Jenkins and GitHub Actions. Seeking
                  full-time opportunities to leverage technical expertise and contribute to impactful projects.</p>
        <ul className="flex gap-4 mb-0">
          <li>
            <a href="#" className="flex justify-center items-center rounded-full bg-slate-600 w-10 h-10 p-2 hover:bg-custom-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-2xl" />
            </a>
          </li>
          <li>
            <a href="#" className="flex justify-center items-center rounded-full bg-slate-600 w-10 h-10 p-2 hover:bg-custom-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/siva-munaganuru-179260125/" className="flex justify-center items-center rounded-full bg-slate-600 w-10 h-10 p-2 hover:bg-custom-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-2xl" />
            </a>
          </li>
          <li>
            <a href="https://github.com/sivamunaganuru" className="flex justify-center items-center rounded-full bg-slate-600 w-10 h-10 p-2 hover:bg-custom-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl" />
            </a>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default About;
