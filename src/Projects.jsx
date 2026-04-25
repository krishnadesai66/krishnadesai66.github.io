import './editprojects.css'; // Import your CSS file

const projects = [
  {
    title: "Stress Predictive Model",
    description: "Python ensemble models (Random Forest, Gradient Boosting, XGBoost) to predict stress levels(low/medium/high) from health metrics, demographic features (age, gender), and activity data in an imbalanced multiclass setting",
    skills:"Skills: PPython, scikit-learn, XGBoost, SHAP",
    githubLink: "https://github.com/krishnadesai66/Stress_Predictive_Model",
  },
  {
    title: "Job Resume Analyzer",
    description: "LLM-powered resume analyzer that parses uploaded PDFs, scores resume-to-JD fit, and returns structured rewrite suggestions via a prompt-engineered JSON pipeline",
    skills:"Skills: Python - scikit-learn, XGBoost, SHAP",
    githubLink: "https://github.com/krishnadesai66/JobResumeAnalyzer",
  },
  {
    title: "Housing Cost Predictor",
    description: "A machine learning model that predicts housing prices.",
    skills:"Skills: Python - Pandas, scki-kit learn, Matplotlib",
    githubLink: "https://github.com/krishnadesai66/HousingCostPredictor",
  },
  {
    title: "Suicides in India Visualization",
    description: "Created data visualizations of suicide rates in India.",
    skills:"Skills: Python - Pandas, NumPy, Seaborn, Matplotlib",
    githubLink: "https://github.com/krishnadesai66/Suicides-In-India",
  },
  {
    title: "eBay Marketplace",
    description: "A recreation of eBay marketplace where website users can log in as users to buy/sell, customer representatives, or website administrators.",
    skills:"Skills: Java Server Pages, Apache Tomcat, HTML, CSS, Java",
    githubLink: "https://github.com/krishnadesai66/ebaymarketplace",
  },
  {
    title: "Food Favorites Board",
    description: "A community board of my favorite restaurants in the NYC/NJ.",
    skills:"Skills: HTML, CSS, JavaScript, React.js",
    githubLink: "  https://github.com/krishnadesai66/NYC-NJ-Food-Favorites-Board",
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <br></br>
      <br></br>
      <h2 className="projects-title">My Projects</h2> 
      <br></br>
      <div className="projects-board">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.skills}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
