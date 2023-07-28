/* eslint-disable react/prop-types */

const TeamCardComponent = ({ data }) => {
  return (
    <div className="TeamCardComponent">
      <div className="image">
        <img src={data?.image} alt={data.name} />
      </div>

      <div className="content">
        <h4 className="name">{data?.name}</h4>
        <h6>{data?.designation}</h6>

        <p className="desc">{data?.description}</p>
      </div>
    </div>
  );
};

export default TeamCardComponent;
