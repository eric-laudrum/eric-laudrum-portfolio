import styles from '../app/about/about.module.css';

const GitHubStats = () => {

    const baseUrl = "https://github-readme-stats-git-master-eric-laudrums-projects.vercel.app/api";
    const params = "&username=eric-laudrum&hide_border=true&count_private=true&cache_seconds=1800";


    return (
        <div className={styles.githubStats}>
            <div className={styles.githubStat}>
                <img 
                    className={styles.githubStatImage}
                    src={`${baseUrl}/top-langs?layout=donut${params}`}
                    alt="Top Languages"
                />
            </div>

            <div className={styles.githubStat}>
                <img
                    className={styles.githubStatImage}
                    src={`${baseUrl}?show_icons=true${params}`}
                    alt="GitHub Stats" 
                />
            </div>
        </div>
    );
}

export default GitHubStats;