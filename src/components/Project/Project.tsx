import './Project.css';

interface props {
  title: string;
  href: string | null;
  description: description;
}

interface description {
  objective: string;
  details: string;
  technologies: string;
  contributors: string;
  startDate: Date;
}

const Project = (props: props) => {
  let link;
  if (props.href !== null) {
    link = (
      <>
        - <a href={props.href}>link</a>
      </>
    );
  }

  return (
    <>
      <dt><strong>{props.title}</strong> {link}</dt>
      <dd><span>Objective:</span> {props.description.objective}</dd>
      <dd><span>Details:</span> {props.description.details}</dd>
      <dd><span>Tech:</span> {props.description.technologies}</dd>
      <dd><span>Contributors:</span> {props.description.contributors}</dd>
      <dd><span>Year:</span> {props.description.startDate.getFullYear()}</dd>
    </>
  );
}

export default Project;
