const Experience = () => {
  return (
    <section
      className="flex flex-col justify-center min-h-screen p-6 lg:p-12"
      id="experience"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl md:text-6xl font-bold font-serif mb-5">
          Experience
        </h2>

        {/* Medvise.ai */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1 mr-auto">
            <h3 className="text-xl font-semibold mb-1">
              Software Engineering Intern
            </h3>
            <div className="text-custom-orange mb-3">
              Medvise.ai - Seattle, WA
            </div>
            {/* fond in italic */}
            <div className="italic mb-3">
              Spearheaded the design of mobile applications using React-native
              and expo. Collaborated with the backend team for API integration
              and with co-founders to steer product design decisions. Enhanced
              app security by implementing Google OAuth2.0 and leveraging
              Expo-secure storage, augmented with fingerprint and face lock
              features.
            </div>
            <ul className="list-disc list-inside mb-3 font-mono">
              <li>
                Solely developed the entire application, crafting over 8+
                user-friendly screens and seamlessly integrating with 12+
                internal AI-based APIs, including an AI-based speech-to-text
                feature and Voice to medical billing codes.
              </li>
              <li>
                Achieved a milestone of 5000+ active doctor users within the
                first-month post-launch, exceeding initial adoption targets by
                200%.
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">
              July 2022 - Aug 2022
            </span>
          </div>
        </div>

        {/* Arizona State University */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1 mr-auto">
            <h3 className="text-xl font-semibold mb-1">
              Graduate Research Assistant
            </h3>
            <div className="text-custom-orange mb-3">
              Arizona State University - Tempe, AZ
            </div>
            {/* fond in italic */}
            <div className="italic mb-3">
              Engaged in a collaborative effort to innovate and develop a
              full-stack motion capture platform, integrating advanced hardware
              with a react-three-fiber 3D web interface for the Arts and Media
              School at ASU. Crafted a scalable cloud infrastructure using AWS
              CDK in TypeScript, orchestrating services including Amplify,
              Cognito, API gateway, S3, Lambda, and DynamoDB to facilitate
              robust data capture and storage.
            </div>
            <ul className="list-disc list-inside mb-3 font-mono">
              <li>
                Enhanced application responsiveness with Tailwind CSS, achieving
                a 12% uplift in user engagement.
              </li>
              <li>
                Enhanced error handling and test coverage from 30% to 82%
                through pair programming with a 3-person team.
              </li>
              <li>
                Streamlined the development workflow by implementing a CI/CD
                pipeline using AWS Amplify and Jest for test cases, resulting in
                a 40% reduction in deployment time.
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">
              July 2022 - Aug 2022
            </span>
          </div>
        </div>

        {/* Futures First - Software Developer */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">Software Developer</h3>
            <div className="text-custom-orange mb-3">
              Futures First - Bangalore, India
            </div>
            <div className="italic mb-3">
              Participated in full-stack development of an internal trade
              analytics platform. Engineered dockerized, scalable REST APIs
              through Spring Boot and maintained deployment on EKS. Optimized
              data access with Spring Data JPA and Hibernate for efficient
              interaction with Amazon RDS. Developed 6 new pages with ReactJS,
              incorporating Flowbite and Tailwind CSS to ensure responsiveness
              and 100% code reusability across the platform. Implemented a
              central logging service leveraging Elasticsearch, Kibana, and
              Fluent Bit, facilitating real-time monitoring and enhancing
              operational insights.
            </div>
            <ul className="list-disc list-inside mb-4 font-mono">
              <li>
                Improved trade execution time by 25% by automating several trade
                strategies, streamlining complex trade ideas, and ensuring
                precise execution.
              </li>
              <li>
                Refactored existing UI components, employing Redux for efficient
                state management and persistent caching, which reduced load
                times by 23%
              </li>
              <li>
                Played a key role in AWS data pipeline architecture, utilizing
                Kinesis, RDS, and EKS for real-time trade data analysis,
                processing over 100 GB of data daily.
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">
              Aug 2018 - June 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
