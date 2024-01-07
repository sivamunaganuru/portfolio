import { FaDatabase, FaGitAlt, FaLinux, FaDocker } from 'react-icons/fa';
import { SiPostgresql, SiFirebase, SiJenkins, SiVite, SiVisualstudio, SiPostman } from 'react-icons/si';
import { SiExpress, SiAmazonaws, SiGooglecloud, SiDocker, SiDjango, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import React from 'react';
const Skills = () => {
  return (
    <section className=" p-6 lg:p-12" id="skills">
      <div className="flex flex-col justify-center h-screen gap-5">
        <h2 className="text-2xl md:text-6xl font-bold font-serif mb-5">Technical Skills</h2>
        {/* Frameworks */}
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-bold text-custom-orange mb-3">Frameworks & Technologies</h3>
          <div className="flex flex-wrap gap-4 mb-4">
            <FrameworkIcon icon={<SiExpress />} label="Express.js" />
            <FrameworkIcon icon={<SiAmazonaws />} label="AWS" />
            <FrameworkIcon icon={<SiGooglecloud />} label="GCP" />
            <FrameworkIcon icon={<SiDocker />} label="Docker" />
            <FrameworkIcon icon={<SiDjango />} label="Django" />
            <FrameworkIcon icon={<SiNextdotjs />} label="Next.JS" />
            <FrameworkIcon icon={<SiTailwindcss />} label="Tailwind CSS" />
            {/* Add icons for any other frameworks you use */}
          </div>
        </div>

        {/* Languages/Libraries */}
        <div className="flex flex-col mb-4">
          <h3 className="text-xl font-bold text-custom-orange mb-3">Languages/Libraries</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <SkillBar skill="Python" level={85} />
            <SkillBar skill="JavaScript" level={85} />
            <SkillBar skill="Java" level={55} />
            <SkillBar skill="HTML/CSS" level={75} />
            {/* ... other languages/libraries */}
          </div>
        </div>

        {/* Tools/Databases */}
        <div className="flex flex-col mb-4">
        <h3 className="text-xl font-bold text-custom-orange mb-3">Tools</h3>
        <div className="flex flex-wrap  gap-4">
              <ToolIcon icon={<FaDatabase />} label="MongoDB" />
              <ToolIcon icon={<SiPostgresql />} label="Postgres" />
              <ToolIcon icon={<SiFirebase />} label="Firebase" />
              <ToolIcon icon={<FaGitAlt />} label="Git" />
              <ToolIcon icon={<FaLinux />} label="Linux" />
              {/* ... other tools */}
              <ToolIcon icon={<SiJenkins />} label="Jenkins" />
              <ToolIcon icon={<SiVite />} label="Vite" />
              <ToolIcon icon={<SiVisualstudio />} label="VS Code" />
              <ToolIcon icon={<SiPostman />} label="Postman" />
              {/* Add icons for any other tools you use */}
          </div>
        </div>
      </div>
    </section>
  );
};


const ToolIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center text-center p-2">
    {React.cloneElement(icon, { size: "3em" })}
    <span className="text-xs mt-2">{label}</span>
  </div>
);

const FrameworkIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center justify-center text-center p-2">
    {React.cloneElement(icon, { size: "3em" })}
    <span className="text-xs mt-2">{label}</span>
  </div>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-4 w-full">
    <div className="text-custom-orange mb-1">{skill}</div>
    <div className="w-full bg-gray-300 rounded-full h-2.5">
      <div className="bg-custom-orange h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);



export default Skills;

