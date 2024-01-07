const Experience = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-6 lg:p-12"  id="experience">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl md:text-6xl font-bold font-serif mb-5">Experience</h2>

        {/* Arizona State University */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1 mr-auto">
            <h3 className="text-xl font-semibold mb-1">Full-stack Developer</h3>
            <div className="text-custom-orange mb-3">Arizona State University - Tempe, AZ</div>
            <ul className="list-disc list-inside mb-3 font-mono">
              <li>Engineered Immersive-Wellness, an interactive web application for ASU healthcare, utilizing JavaScript, Express.js, and Django frameworks. Improved the load speed by 60% by resolving critical bugs and dynamic loading techniques.</li>
              <li>Implemented secure user authentication, optimized MongoDB schemas, and integrated ML features via Django and REST APIs.</li>
              <li>Orchestrated migration to Docker and streamlined CI/CD pipeline using GitHub Actions, reducing the deployment time by 40%.</li>
              <li>Maintained 99% uptime and optimized costs in high-traffic AWS EC2 environment using Auto Scaling Groups.</li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">July 2022 - Present</span>
          </div>
        </div>

        {/* Futures First - Software Developer */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">Associate (Software Developer)</h3>
            <div className="text-custom-orange mb-3">Futures First - Bangalore, India</div>
            <ul className="list-disc list-inside mb-4 font-mono">
              <li>Collaborated with a team to design and implement a high-throughput data pipeline for processing of trading data using Amazon Kinesis, AWS Lambda, AWS Glue, and Redshift, resulting in a 50% increase in data processing efficiency.</li>
              <li>Actively contributed to architectural decisions, focusing on enhancing system scalability, security, and cost optimization strategies.</li>
              <li>Enhanced and expanded the trader dashboards using ReactJS and Node.js, adding new routes for advanced trading analytics. Integrated Chart.js for sophisticated and interactive data visualizations, improving real-time monitoring and analysis for traders.</li>
              <li>Optimized frontend API interactions by implementing lazy loading with React.Suspense and utilizing persistent Redux stores.</li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">Jan 2021 - June 2022</span>
          </div>
        </div>

        {/* Futures First - Quantitative Analyst */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">Quantitative Analyst</h3>
            <div className="text-custom-orange mb-3">Futures First - Bangalore, India</div>
            <ul className="list-disc list-inside mb-4 font-mono">
              <li>Analyzed historical market data using Python, including seasonality and inter-product dependencies, and extracted economic and social media data using tools like Selenium. Enabled the derivation of actionable insights for trading strategies.</li>
              <li>Conducted rigorous backtesting of trading strategies, contributing significantly to the automation of trading desk strategies.</li>
              <li>Developed dynamic Excel dashboards featuring complex mathematical models to provide insights into futures and options pricing for several fixed-income markets across South and North America.</li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">Aug 2018 - Dec 2020</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
