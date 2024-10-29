import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Beacon Askari Secondary School"
            date="2010 - 2023"
           
          />
          <TimelineItem
            title="Adamjee Govt. Science College"
            date="2023 — Present"
            
          />
       
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Certificates</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Generative AI Enginner"
            date="2023 — Present"
            description="I am currently a part of the Generative AI Engineer program at GIAIC, where I have successfully completed Quarter 1. This course has provided me with foundational knowledge in AI technologies, enabling me to build and deploy AI-driven solutions. I have gained hands-on experience in working with advanced algorithms and tools, enhancing my skills in machine learning and deep learning. My journey through this course is helping me understand the potential of generative AI and how to apply it to real-world projects, such as AI-driven content creation and automation.                                                      "
          />
          <TimelineItem
            title="Web Development"
            date="2023 — 2024"
            description="I am also a part of Bano Qabil 3.0 in web development, where I am learning essential skills like HTML, CSS, and JavaScript. Through this program, I’ve gained a strong understanding of front-end web development, enabling me to build responsive and interactive websites. My dedication and performance in this course have led me to secure a position in the top 3, which has further motivated me to excel in the field of web development. This experience is helping me refine my coding skills and prepare for a successful career in tech."
          />
          <TimelineItem
            title="CyberSecurity"
            date="2023 - 2024"
            description="I am currently enrolled in the Bano Qabil 3.0 program for cybersecurity, focusing on becoming a Security Operations Center (SOC) analyst. This course has equipped me with critical skills in monitoring, detecting, and responding to security threats, making me proficient in handling cybersecurity challenges. Through my hard work and dedication, I have secured a position in the top 5, further solidifying my expertise in this field. This achievement motivates me to continue advancing my knowledge and skills in cybersecurity to ensure robust protection against cyber threats."
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="UI UX Design" value={70} />
          <SkillItem title="Front End Development" value={90} />
          <SkillItem title="AI" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
