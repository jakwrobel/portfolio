//This component displays project section. Each component is for only one project
const Project = ({ imgUrl, name, technology, viewUrl, codeUrl }) => {
  return (
    <div className="image">
      <img src={imgUrl} alt={name} />
      <div className="image__overlay">
        <section className="image__tittle-wrap">
          <h2>{name}</h2>
          <h3>{technology}</h3>
        </section>
        <div className="image__buttons-wrap">
          <a href={viewUrl}>View</a>
          <a href={codeUrl}>Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
