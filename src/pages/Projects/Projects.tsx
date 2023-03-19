import './Projects.css';
import Project from '../../components/Project/Project';

const data = [
  {
    title: 'Wiki Quiz',
    href: null,
    description: {
      objective: 'Generate a short quiz from a wiki URL.',
      details: 'Implemented as a client-side rendered website calling several separately hosted microservices. The app first takes the input URL and requests scraped and transformed data from a service. Using the data, it then retrieves the most important phrases found, masks the most important phrases, and retrieves suggestions for the masks which would be used as alternative multiple choice answers. After all responses from the services have been received, the app proceeds to display the generated quiz. Created for a class project that required the use of Wikipedia and microservices. Worked on all but the image fetching service of the microservices-oriented project alone.',
      technologies: 'Crystal, JavaScript, Svelte, Python, FastAPI, Redis, Terraform, Docker, Heroku',
      contributors: 'Allen J Huang',
      startDate: new Date('2021-04-27'),
    }
  },
  {
    title: 'Portfolio Viz',
    href: null,
    description: {
      objective: 'Create a stock map from csv text to help quickly visualize changes in portfolio worth.',
      details: 'Implemented as a client-side rendered website calling a microservice for data retrieval. The app first takes csv text input by file or text and retrieves corresponding market price data from a service. Using the data, it then draws the assets onto a web canvas as individual color-coded rectangles. Originally created as an entry to a finance-themed hackathon and later improved upon. Worked on all parts of the project with one other teammate through pair programming.',
      technologies: 'JavaScript, Python, Google Cloud Functions',
      contributors: 'Tommy Zhao, Allen J Huang',
      startDate: new Date('2021-04-10'),
    }
  },
  {
    title: 'CARboncycle',
    href: null,
    description: {
      objective: "Estimate CO2 emissions based on a typical work week's commute.",
      details: 'Implemented as a Panel web app calling Google Maps API to get distances and approximate traffic wait times. Supports several different unit systems through the use of the pint library. Created as a submission for ClimateHacks. Worked on all parts of the project with one other teammate asynchronously.',
      technologies: 'Python, Panel, Google Maps API',
      contributors: 'Andrew Huang, Allen J Huang',
      startDate: new Date('2021-04-25'),
    }
  },
  {
    title: 'Just Get Me By',
    href: null,
    description: {
      objective: "Gather coursework and scores from a user's Canvas account and calculate minimum scores needed on upcoming assignments in order to reach a user-specified target grade.",
      details: "You’re studying hard, absorbing the material, and you are kicking butt on the assignments. However, rumors are flying that the upcoming final is known to ruin grades, and along with your other responsibilities it just may not be feasible to dedicate the effort you usually do give in order to get the grade you want. This is where Just Get Me By comes in. This is a streamlined desktop app that gathers your coursework, assignments, scores, and grades from your Canvas class(es) and tells you the minimum target scores needed on upcoming assignments in order to get that A. Created as an entry to BeaverHacks. Worked mainly on the data retrieval and processing part of the project with two other teammates asynchronously.",
      technologies: 'Python, Canvas REST API, PySimpleGUI',
      contributors: 'Rohit Chaudhary, Michael Chen, Allen J Huang',
      startDate: new Date('2020-12-16'),
    }
  },
  {
    title: 'Top Reddit Posts',
    href: null,
    description: {
      objective: 'Allow the user to view a compilation of posts that made it to the top for select subreddits.',
      details: 'Runs a cron job to scrape data from Reddit using BeautifulSoup and to store data onto a PostgreSQL database. A web app then queries the database and provides a graphical user interface to a paginated compilation of top posts with view count and filter options. Worked on all aspects of the project with one other teammate through pair programming.',
      technologies: 'Python, PostgreSQL, Google Cloud SQL, Google Compute Engine, Express.js, Nginx',
      contributors: 'Tommy Zhao, Allen J Huang',
      startDate: new Date('2019-06-24'),
    }
  },
];

const Projects = () => {
  return (
    <div className="Home container is-fluid">
      <div className="columns">
        <div className="column"></div>
        <div className="column is-three-fifths">
          <h3>Projects</h3>
          <dl>
            {data.map((project) =>
              <Project title={project.title} href={project.href}
                description={project.description}
              />
            )}
          </dl>
        </div>
        <div className="column"></div>
      </div>
    </div>
  );
}

export default Projects;
