const Resume = () => {
  return (
    <div className="Resume container is-fluid">
      <object
        data={`${process.env.PUBLIC_URL}/pdf/AllenJ_Huang_Resume_nc.pdf`}
        type="application/pdf"
        style={{width: '100%', height: 'calc(100vh - 92px)'}}
      >
        <div className="columns">
          <div className="column"></div>
          <div className="column is-three-fifths">
            <a href={`${process.env.PUBLIC_URL}/pdf/AllenJ_Huang_Resume_no_contact.pdf`}>AllenJ_Huang_Resume.pdf</a>
          </div>
          <div className="column"></div>
        </div>
      </object>
    </div>
  );
}

export default Resume;
