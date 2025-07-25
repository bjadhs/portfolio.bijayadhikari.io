import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { ScrollReveal } from '../components/ScrollAnimations';

interface ResumeData {
  personal_info: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  expertise: string[];
  education: Array<{
    institution: string;
    years: string;
    level?: string;
    degree?: string;
  }>;
  work_experience: Array<{
    company: string;
    role: string;
    years: string;
  }>;
  career_profile: string;
  core_qualifications: string[];
  project_showcase: {
    github: string;
    projects: string[];
  };
}

const ResumePage: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadResumeData = async () => {
    try {
      setLoading(true);
      // Add timestamp to prevent caching during development
      const timestamp = import.meta.env.DEV ? `?t=${Date.now()}` : '';
      const response = await fetch(`/my_resume.json${timestamp}`);
      if (!response.ok) {
        throw new Error(`Failed to load resume data: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setResumeData(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load resume');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResumeData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="glass p-8 rounded-2xl">
          <div className="animate-pulse text-center">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-text-secondary">Loading resume...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary">
        <div className="glass p-8 rounded-2xl text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <Button onClick={loadResumeData}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!resumeData) return null;

  const { personal_info, expertise, education, work_experience, career_profile, core_qualifications, project_showcase } = resumeData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Resume
            </motion.h1>
            <p className="text-xl text-text-secondary">{personal_info.name}</p>
          </div>

          {/* Contact Info */}
          <ScrollReveal>
            <GlassCard className="mb-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href={`mailto:${personal_info.email}`} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <Mail size={16} /> {personal_info.email}
                </a>
                <a href={`tel:${personal_info.phone}`} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <Phone size={16} /> {personal_info.phone}
                </a>
                <div className="flex items-center gap-2 text-text-secondary">
                  <MapPin size={16} /> {personal_info.address}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Career Profile */}
          <ScrollReveal delay={0.1}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Career Profile</h2>              <p className="text-text-secondary leading-relaxed">{career_profile}</p>
            </GlassCard>
          </ScrollReveal>

          {/* Expertise */}
          <ScrollReveal delay={0.2}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="glass px-4 py-2 rounded-lg text-text-secondary border border-border"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Core Qualifications */}
          <ScrollReveal delay={0.3}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Core Qualifications</h2>
              <ul className="space-y-2">
                {core_qualifications.map((qual, index) => (
                  <li key={index} className="text-text-secondary flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    {qual}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal delay={0.4}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Education</h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg border-l-4 border-cyan-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-text-primary">{edu.institution}</h3>
                    <p className="text-cyan-400 text-sm">{edu.years}</p>
                    {edu.degree && <p className="text-text-secondary">{edu.degree}</p>}
                    {edu.level && <p className="text-text-secondary">{edu.level}</p>}
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Work Experience */}
          <ScrollReveal delay={0.5}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Work Experience</h2>
              <div className="space-y-4">
                {work_experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg border-l-4 border-purple-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="font-bold text-text-primary">{exp.role}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                    <p className="text-text-secondary text-sm">{exp.years}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Projects */}
          <ScrollReveal delay={0.6}>
            <GlassCard className="mb-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">Projects</h2>
              <div className="mb-4">
                <a
                  href={project_showcase.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
                >
                  <Github size={16} />
                  View GitHub Profile
                  <ExternalLink size={14} />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project_showcase.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg hover:border-cyan-400/50 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-text-secondary">{project}</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Download Button */}
          <ScrollReveal delay={0.7}>
            <div className="text-center">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Download size={20} />}
                onClick={() => {
                  // Create a text version of the resume
                  const resumeText = `
${personal_info.name}
${personal_info.address}
Phone: ${personal_info.phone} | Email: ${personal_info.email}

CAREER PROFILE
${career_profile}

EXPERTISE
${expertise.join('\n• ')}

EDUCATION
${education.map(e => `${e.institution} (${e.years}) - ${e.degree || e.level}`).join('\n')}

WORK EXPERIENCE
${work_experience.map(w => `${w.role} at ${w.company} (${w.years})`).join('\n')}

PROJECTS
${project_showcase.projects.join('\n')}
                  `.trim();
                  
                  const blob = new Blob([resumeText], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `${personal_info.name.replace(' ', '_')}_Resume.txt`;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                Download Resume
              </Button>
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;