import React from 'react'

const Education = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-6 lg:p-12"  id="education">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl md:text-6xl font-bold font-serif mb-5">Education</h2>

        {/* Arizona State University */}
        <div className="flex flex-col md:flex-row mb-5">
          <div className="flex-1 mr-auto">
            <h3 className="text-xl font-semibold mb-1">Master Of Computer Science</h3>
            <div className="text-custom-orange mb-3">ARIZONA STATE UNIVERSITY - Tempe, AZ</div>
            <p className=''>CGPA: 4.17/4.00</p>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">Aug 2022 — May 2024</span>
          </div>
        </div>


        {/* National Institute of Technology Karnataka */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mr-auto">
            <h3 className="text-xl font-semibold mb-1">Bachelor Of Technology in Electrical And Electronics Engineering</h3>
            <div className="text-custom-orange mb-3">NATIONAL INSTITUTE OF TECHNOLOGY KARNATAKA - Surathkal, India</div>
            <p>CGPA: 8.52/10.00</p>
          </div>
          <div className="mb-4 md:mt-0">
            <span className="text-md text-custom-orange font-medium">Jul 2014 — May 2018</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
