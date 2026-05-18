import styles from '../app/projects/projects.module.css';


interface SidebarProps {
  title: string;
  sections: string[];
  prefix?: string;
  repo?: string;
  repoText?: string;
  resumeUrl?: string;
  customClassName?: string;
}


export default function Sidebar({ title, sections, customClassName, prefix, repo, repoText, resumeUrl }: SidebarProps) {
  return (
    <div className={`left-sidebar ${customClassName || ''}`} id="project-toc">
      <h2 className="section-title">{title}</h2>

      <div className="sidebar-nav">
        {sections?.map((section) => {
          
          // Clean up section titles
          const slug = section
            .toLowerCase()
            .replace(/&/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-');

          const anchor = prefix ? `${String(prefix)}_${slug}` : slug;

          return (
            <a key={section} className="github-link" href={`#${anchor}`}>
              {section}
            </a>
          );
        })}

        {/* --- Download Link --- */}
        {resumeUrl && (
          <div >
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-link"
              style={{ fontWeight: "bold", color: "#2a769c" }}
              
            >
              {"View Resume (PDF)"} →
            </a>
          </div>
        )}

        {/* GitHub Account / Repository */}
        {repo && (
          <div className="repo-link-container">
            <a 
              href={repo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="github-link"
              style={{ fontWeight: "bold", color: "#2a769c" }}
            >
              {repoText || "GitHub Repository"} →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}