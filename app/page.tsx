"use client";
import { motion } from "framer-motion";
import { profile } from "./data/profile";
import SectionTitle from "./components/SectionTitle";
import AnimatedCard from "./components/AnimatedCard";
import Navbar from "./components/Navbar";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaUserCheck,
  FaAward,
  FaChartLine,
  FaRegLightbulb,
  FaRocket,
  FaMicrosoft,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaDatabase,
  FaPenNib
} from "react-icons/fa";

export default function Home() {
  // Handle PDF download with confirmation
  const handleDownloadResume = () => {
    const userConfirmed = window.confirm("Do you want to download the resume?");
    
    if (userConfirmed) {
      // Create a link to the PDF file in public folder
      const pdfUrl = "/resume.pdf";
      
      // Create an anchor element
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Awokoya_Mariam_Resume.pdf";
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show success message
      alert("Download started successfully!");
    } else {
      alert("Download cancelled.");
    }
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section with Profile Picture */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-hero -z-10" />
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 -z-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src="https://ui-avatars.com/api/?name=Mariam+Awokoya&background=6366f1&color=fff&size=200&bold=true&length=2&font-size=80"
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-3 text-gray-900"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-800 font-medium mb-6"
          >
            <FaRocket className="inline-block mr-2 text-indigo-600" />
            {profile.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-gray-800 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm">
              <FaMapMarkerAlt className="text-indigo-600" /> 
              <span>{profile.contact.address}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm">
              <FaPhoneAlt className="text-indigo-600" /> 
              <span>{profile.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm">
              <FaEnvelope className="text-indigo-600" /> 
              <span>{profile.contact.email}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
            >
              <FaDownload className="text-sm" /> Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/80 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Summary */}
      <section id="summary" className="px-6 py-16 max-w-6xl mx-auto">
        <SectionTitle title="Professional Summary" />
        <AnimatedCard>
          <div className="flex gap-3 mb-3">
            <FaUserCheck className="text-indigo-600 text-xl" />
            <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{profile.summary}</p>
          </div>
        </AnimatedCard>
      </section>

      {/* Work Experience */}
      <section id="experience" className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Work Experience" />
          <div className="space-y-6">
            {profile.experience.map((exp, idx) => (
              <AnimatedCard key={idx} delay={idx * 0.1}>
                <div className="flex gap-3">
                  <FaBriefcase className="text-indigo-600 text-xl flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-indigo-600">{exp.role}</h3>
                    <p className="text-gray-500 text-sm mb-3">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside space-y-1.5 text-gray-700 text-sm">
                      {exp.duties.map((duty, i) => (
                        <li key={i}>{duty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section id="skills" className="px-6 py-16 max-w-6xl mx-auto">
        <SectionTitle title="Core Skills & Software" />
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedCard delay={0}>
            <div className="flex items-center gap-2 mb-3">
              <FaCode className="text-indigo-600 text-xl" />
              <h3 className="text-lg font-semibold text-indigo-600">Core Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, i) => (
                <span key={i} className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs border border-indigo-200 flex items-center gap-1">
                  <FaChartLine className="text-xs" />
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedCard>
          <AnimatedCard delay={0.1}>
            <div className="flex items-center gap-2 mb-3">
              <FaMicrosoft className="text-indigo-600 text-xl" />
              <h3 className="text-lg font-semibold text-indigo-600">Software</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.software.map((sw, i) => (
                <span key={i} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs border border-purple-200 flex items-center gap-1">
                  {sw.includes("Excel") && <FaFileExcel className="text-xs" />}
                  {sw.includes("Word") && <FaFileWord className="text-xs" />}
                  {sw.includes("PowerPoint") && <FaFilePowerpoint className="text-xs" />}
                  {sw.includes("Accounting") && <FaDatabase className="text-xs" />}
                  {sw.includes("CorelDRAW") && <FaPenNib className="text-xs" />}
                  {!sw.includes("Excel") && !sw.includes("Word") && !sw.includes("PowerPoint") && !sw.includes("Accounting") && !sw.includes("CorelDRAW") && <FaMicrosoft className="text-xs" />}
                  {sw}
                </span>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Education & Attributes */}
      <section id="education" className="px-6 py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <SectionTitle title="Education" />
              <AnimatedCard>
                {profile.education.map((edu, i) => (
                  <div key={i} className="mb-5 last:mb-0 flex gap-3">
                    <FaGraduationCap className="text-indigo-600 text-xl flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600 text-sm">{edu.institution} | {edu.period}</p>
                    </div>
                  </div>
                ))}
              </AnimatedCard>
            </div>
            <div>
              <SectionTitle title="Attributes" />
              <AnimatedCard delay={0.1}>
                <div className="flex flex-wrap gap-2">
                  {profile.attributes.map((attr, i) => (
                    <span key={i} className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-xs border border-pink-200 flex items-center gap-1">
                      <FaRegLightbulb className="text-xs" />
                      {attr}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>



      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-200 bg-white">
        <p>© {new Date().getFullYear()} Awokoya Mariam Omotolani — Professional Portfolio</p>
      </footer>
    </main>
  );
}