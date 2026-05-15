import styles from "../app/projects/projects.module.css"

export default function ProjectNav({ active, setActive }: { active: string, setActive: (val: string) => void }) {
    
    const navItems = [/* "Contractor Connect", */"Trellis", "Warble", "Loop-In" ];
    
    return (
        <div className={styles.projectNav}>
            {navItems.map((item) => (
                <a 
                    key={item}
                    className={active === item ? "nav-link-active" : "nav-link-item"}
                    onClick={() => setActive(item)}
                    style={{ cursor: 'pointer' }}
                >
                    {item}
                </a>
            ))}
        </div>
    );
}