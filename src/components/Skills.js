import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { FaCode, FaDatabase, FaRobot, FaCloud, FaChartBar, FaTools, FaBrain } from "react-icons/fa";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" style={{ position: "relative" }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{ textAlign: "center", padding: "50px 20px" }}>
              <h2 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#fff" }}>Skills</h2>
              <p style={{ color: "#bbb", marginBottom: "40px" }}>
                A comprehensive showcase of my expertise and tools I work with.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                style={{ padding: "20px" }}
              >
                <div className="item" style={{ textAlign: "center" }}>
                  <FaCode size={40} style={{ color: "#ffd700" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Programming Languages</h5>
                  <p style={{ color: "#bbb" }}>Python, R, SQL</p>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                  <FaRobot size={40} style={{ color: "#00bfff" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Machine Learning</h5>
                  <p style={{ color: "#bbb" }}>
                    Scikit-Learn, Numpy, Pandas, Matplotlib, PySpark, Databricks
                  </p>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                  <FaBrain size={40} style={{ color: "#ff4500" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Deep Learning & GenAI</h5>
                  <p style={{ color: "#bbb" }}>
                    PyTorch, Tensorflow, Transformers, Langchain, Llama, Fine-tuning LLMs
                  </p>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                  <FaTools size={40} style={{ color: "#32cd32" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Deployment</h5>
                  <p style={{ color: "#bbb" }}>
                    Streamlit, Flask, FastAPI, MLFlow, DVC, MLOps, CI/CD, Docker
                  </p>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                  <FaChartBar size={40} style={{ color: "#ffa500" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Data Science</h5>
                  <p style={{ color: "#bbb" }}>
                    Airflow, DBT, SSIS, ETL, Tableau, Power BI, Excel, Statistics, Time series, Experimental design,
                    Hypothesis testing, Web Scraping
                  </p>
                </div>
                <div className="item" style={{ textAlign: "center" }}>
                  <FaCloud size={40} style={{ color: "#1e90ff" }} />
                  <h5 style={{ margin: "15px 0", color: "#fff" }}>Cloud Services</h5>
                  <p style={{ color: "#bbb" }}>
                    BigQuery, Amazon SageMaker, Azure Databricks, S3 bucket, Amazon Redshift
                  </p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" style={{ position: "absolute", left: 0, bottom: 0, zIndex: -1 }} />
    </section>
  );
};
