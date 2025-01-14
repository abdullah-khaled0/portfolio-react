import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {


  const DS_projects = [
    {
      title: "Stock Price Forecasting",
      description:
        "Developed a time series model using Facebook's Prophet library to predict stock prices. Built an interactive Streamlit app for real-time analysis and forecasting.",
      imgUrl: "https://tradebrains.in/features/wp-content/uploads/2021/07/stock-market-news-trade-brains.jpg",
      linkUrl: "https://github.com/abdullah-khaled0/ts-forecasting-with-prophet",
    },
    {
      title: "Customer Segmentation",
      description:
        "Segmented customers based on demographic, income, spending, and behavior data to enhance marketing personalization. Used clustering techniques like K-means and hierarchical methods.",
      imgUrl: "https://www.bounteous.com/sites/default/files/insights/2022-10/previews/screen_shot_2022-09-01_at_12.34.57_pm.png",
      linkUrl: "https://www.linkedin.com/posts/abdullah-khaled-0608a9236_customer-segmentation-activity-7223320825699946497-K2ex/?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Customer Segmentation based-on RFM",
      description:
        "The primary objective was to segment customers using RFM (Recency, Frequency, and Monetary) analysis, enabling more personalized and efficient marketing strategies.",
      imgUrl: "https://github.com/abdullah0150/Images/raw/main/images/project-2.png",
      linkUrl: "https://www.linkedin.com/posts/abdullah-khaled-0608a9236_customer-segmentation-based-on-rfm-activity-7240047977279434753-ybdZ?utm_source=share&utm_medium=member_desktop",
    },
    {
      title: "Credit Fraud Detector",
      description:
        "The Credit Fraud Detector is a machine learning project designed to accurately detect fraudulent transactions. Using various predictive models, we aim to determine whether a transaction is a normal payment or fraudulent.",
      imgUrl: "https://camo.githubusercontent.com/03ea8e88edafd5ba5f47d9aa413375ea9d5a856f26e3e04e078898ad7b0d0a9b/68747470733a2f2f7777772e746563686f70656469612e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032342f30362f36302d476c6f62616c2d4372656469742d436172642d46726175642d537461746973746963732d696e2d323032342e77656270",
      linkUrl: "https://github.com/abdullah-khaled0/Credit-Fraud-Detector",
    },
    {
      title: "Bank Marketing Campaign",
      description:
        "Identified segments more likely to open deposit accounts and analyzed communication channels for better conversion rates. Evaluated promotional strategies using past campaign data.",
      imgUrl: 'https://camo.githubusercontent.com/f457d050545f58eb4649cc2940a9a0ebd015c58ba33b9675d97e83eb3c8d8473/68747470733a2f2f696d616765732e6374666173736574732e6e65742f39626d7373316a63766a39752f32585446743744795648655651336c79416875466d492f38363161333261623963333863376166623232316362313131363365323734642f436173682d6465706f736974732e706e67',
      linkUrl: "https://github.com/abdullah-khaled0/BankMarketingCampaign-OpeningATermDeposit",
    },
    {
      title: "Advanced House Price Prediction",
      description:
        "This project delves into advanced regression techniques to uncover the most impactful features affecting house prices, providing insights that go beyond mere predictions.",
      imgUrl: "https://miro.medium.com/v2/resize:fit:1024/1*Juv1bpp5--0Fl8cA4EmTPw.jpeg",
      linkUrl: "https://github.com/abdullah-khaled0/Advanced-House-Price-Prediction-and-EDA",
    },
    {
      title: "Is the Housing Market Heating in Melbourne?",
      description:
        "In this project, we will analyze house prices in Melbourne, Australia, to answer critical questions about the city's housing market. The goal is to provide insights into the current trends.",
      imgUrl: "https://camo.githubusercontent.com/13c1785fd011c6fd1730c6f54f98c142db14130bd58ba872e56568b76fa2f547/68747470733a2f2f6d656469612e6e6f6d616469636d6174742e636f6d2f323032342f6d656c627468696e67732e6a706567",
      linkUrl: "https://github.com/abdullah-khaled0/Melbourne-Australia-Housing-Market-Analysis-and-Predicting",
    },
    {
      title: "Movie Recommendation System with Collaborative-Filtering",
      description:
        "Developed a recommendation system using the MovieLens 100k dataset.",
      imgUrl: "https://github.com/abdullah0150/Images/raw/main/images/project-4.png",
      linkUrl: "https://github.com/abdullah-khaled0/Movie-Recommendation-System-with-Collaborative-Filtering/blob/main/Movie%20Recommendation%20System%20with%20Collaborative%20Filtering%20Presentation.pdf",
    },
    {
      title: "A/B testing project with the Cookie Cats mobile game",
      description:
        "",
      imgUrl: "https://github.com/abdullah0150/Images/raw/main/images/project-1.png",
      linkUrl: "https://github.com/abdullah-khaled0/Credit-Fraud-Detector",
    },
    {
      title: "Chatbot with Gemini",
      description:
        "A robust FastAPI application leveraging LangChain, Google Generative AI, and FAISS for document-based question answering. The app retrieves information from a GitHub-hosted document to answer user queries in a verbose and detailed manner. It is integrated with a Flutter app for seamless user interaction.",
      imgUrl: 'https://github.com/abdullah-khaled0/chatbot-with-Gemini-Railway/raw/main/demo_gif.gif',
      linkUrl: "https://github.com/abdullah-khaled0/chatbot-with-Gemini-Railway",
    },
    {
      title: "CashierBot for Restaurants",
      description:
        "An AI-powered chatbot built with Rasa to streamline order placement, table reservations, and menu browsing for restaurants. Designed to handle customer interactions smoothly and efficiently, this bot uses natural language understanding (NLU) to provide a seamless user experience.",
      imgUrl: "https://github.com/abdullah-khaled0/CashierBot-with-Rasa-open-source/raw/main/demo_gif.gif",
      linkUrl: "https://github.com/abdullah-khaled0/CashierBot-with-Rasa-open-source",
    },
    {
      title: "Quiz Generator",
      description:
        "This project is a FastAPI-based application that generates multiple-choice quizzes from the content of uploaded PDF files. It is deployed on Railway and integrates seamlessly with a Flutter App for an enhanced user experience. The app leverages LangChain, Google Generative AI, and FAISS for natural language processing, embeddings, and vector-based document retrieval.",
      imgUrl: "https://github.com/abdullah-khaled0/Exam-Generator/raw/main/demo.gif",
      linkUrl: "https://github.com/abdullah-khaled0/Exam-Generator",
    },

  ];

  const DA_projects = [
    {
      title: "Customer Churn Analysis",
      description:
        "The primary goal of this project was to analyze customer behavior and identify key drivers of churn. By understanding patterns in the data, actionable insights were derived to improve customer retention strategies.",
      imgUrl: "https://github.com/abdullah-khaled0/Analyzing-Customer-Churn/raw/main/Dashboard.png",
      linkUrl: "https://github.com/abdullah-khaled0/Analyzing-Customer-Churn",
    },
    {
      title: "Sales Performance Enhancement",
      description:
        "Analyzed sales data to achieve $23.80M total sales (+39% YoY) and $21.94M profit (+39% YoY). Highlighted top-performing channels, categories, and promotional strategies.",
      imgUrl: "https://github.com/abdullah0150/Images/raw/main/images/project-5.png",
      linkUrl: "https://github.com/abdullah-khaled0/Sales-Dashboard-in-PowerBI/blob/main/presentation.pdf",
    },
    {
      title: "ETL Project",
      description:
        "Implemented an ETL process using SSIS and presented processed data using Power BI dashboards for insightful decision-making.",
      imgUrl: "https://github.com/abdullah0150/Images/blob/main/images/etl_img.png?raw=true",
      linkUrl: "https://example.com/etl-project",
    },
    {
      title: "Walmart Analytics",
      description:
        "The objective is to build a robust predictive model that can accurately forecast weekly retail sales based on the provided features. By leveraging historical data and external indicators.",
      imgUrl: "https://github.com/abdullah-khaled0/Walmart-Analytics/raw/main/dashboard.png",
      linkUrl: "https://github.com/abdullah-khaled0/Walmart-Analytics",
    },
    {
      title: "Supply Chain Analysis",
      description:
        "This project provides an analysis of DataCo Global's supply chain data, covering key areas such as Provisioning, Production, Sales, and Commercial Distribution. The analysis leverages R for data manipulation and visualization, providing insights to improve supply chain efficiency.",
      imgUrl: "https://camo.githubusercontent.com/ab05c471d85c69a386b59efc41c47018cf5474cb7e2a93a57efcbcdab3a5202d/68747470733a2f2f706e672e706e67747265652e636f6d2f7468756d625f6261636b2f66773830302f6261636b67726f756e642f32303233303732322f706e67747265652d667574757269737469632d6175746f6d6f62696c65732d616e642d6469676974616c2d737570706c792d636861696e2d33642d72656e646572696e672d616e642d696c6c7573747261746f722d64657369676e2d696d6167655f333836383838382e6a7067",
      linkUrl: "https://github.com/abdullah-khaled0/Supply-Chain-Analysis-using-R",
    },
    {
      title: "Customer Personality Analysis",
      description:
        "The Credit Fraud Detector is a machine learning project designed to accurately detect fraudulent transactions. Using various predictive models, we aim to determine whether a transaction is a normal payment or fraudulent.",
      imgUrl: "https://github.com/Heba-A-Saleh/images1/raw/main/lv_0_20230317181948.gif",
      linkUrl: "https://www.kaggle.com/code/abdullah7aled/customer-personality-analysis-in-python",
    },
    {
      title: "Pizza Sales using SQL and Power-BI",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/Pizza-Sales-using-SQL-and-Power-BI/raw/main/Dash1.png",
      linkUrl: "https://github.com/abdullah-khaled0/Pizza-Sales-using-SQL-and-Power-BI",
    },    {
      title: "HR Analytics",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Power%20BI%20Projects/HR%20Analytics/display%201.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Power%20BI%20Projects/HR%20Analytics",
    },    {
      title: "Master Customer",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Master%20Customer/display.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Master%20Customer",
    },    {
      title: "Data Professional Survey Breakdown",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Data%20Professional%20Survey%20Breakdown/display.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Data%20Professional%20Survey%20Breakdown",
    },    {
      title: "Store Sales",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Store%20Sales/store%20sales.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Store%20Sales",
    },    {
      title: "Supermarket Sales",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Supermarket%20Sales/display%201.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Power%20BI%20Projects/Supermarket%20Sales",
    },    {
      title: "Bike Sales",
      description:
        "",
      imgUrl: "https://github.com/abdullah-khaled0/My-Projects/blob/main/Data%20Analytics%20Projects/Excel%20Projects/display.png?raw=true",
      linkUrl: "https://github.com/abdullah-khaled0/My-Projects/tree/main/Data%20Analytics%20Projects/Excel%20Projects",
    },
  ];
  
  const SE_projects = [
    {
      title: "FCAI App",
      description:
        "Created to assist my classmates in their studies during college, I designed and published this app on the Google Play Store to simplify access to academic materials.",
      imgUrl: "https://github.com/abdullah0150/Images/blob/main/images/0114.gif?raw=true",
      linkUrl: "https://drive.google.com/file/d/1B7Xh2xrwt-4-3O88ULzaCfRKWy__Uolc/view?usp=drive_link&usp=embed_facebook",
    },
    {
      title: "Tasbeeh App",
      description:
        "Developed and released a Tasbeeh app, providing users with a digital tool for tasbeeh.",
      imgUrl: "https://github.com/abdullah0150/Images/blob/main/images/tasbeeh.jpg?raw=true",
      linkUrl: "https://drive.google.com/file/d/1B7Xh2xrwt-4-3O88ULzaCfRKWy__Uolc/view?usp=drive_link&usp=embed_facebook",
    },
    {
      title: "3D Game",
      description:
        " Leveraging the Unity Engine, I designed, developed, and published a 3D game on the Google Play Store.",
      imgUrl: "https://github.com/abdullah0150/Images/blob/main/images/game.gif?raw=true",
      linkUrl: "https://drive.google.com/file/d/1B7Xh2xrwt-4-3O88ULzaCfRKWy__Uolc/view?usp=drive_link&usp=embed_facebook",
    },
    {
      title: "Website Development",
      description:
        "Created websites using HTML, CSS, Bootstrap, PHP, SQL, JavaScript, and JQuery, showcasing a full stack of web development skills and delivering dynamic and responsive user experiences.",
      imgUrl: 'https://github.com/abdullah0150/Images/blob/main/images/website_img.png?raw=true',
      linkUrl: "https://drive.google.com/file/d/1B7Xh2xrwt-4-3O88ULzaCfRKWy__Uolc/view?usp=drive_link&usp=embed_facebook",
    },
    {
      title: "Hoozgram App",
      description:
        "I built and launched this app to help users express and track their mood (e.g. happy, sad, etc.), with the goal of fostering greater emotional awareness.",
      imgUrl: "https://github.com/abdullah0150/Images/blob/main/images/hoozgram.jpg?raw=true",
      linkUrl: "https://drive.google.com/file/d/1B7Xh2xrwt-4-3O88ULzaCfRKWy__Uolc/view?usp=drive_link&usp=embed_facebook",
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Data Scientist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Analyst</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Software Engineer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          DS_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          DA_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          SE_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
