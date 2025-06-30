import React from "react";
import PropTypes from "prop-types"; 

const CourseCard = ({
  title,
  image,
  price,
  company,
  description,
  onclickCourse,
  _id,
}) => {
  return (
    <div className='card' onClick={() => onclickCourse(_id)}>
      <img
        src={image}
        className='card-img-top'
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        {company && (
          <>
            <div className='d-flex justify-content-start g-2'>
              <div style={{ height: "15px", width: "15px", marginLeft: "0px" }}>
                <img
                  src={company.logo}
                  alt={title}
                  className='img-fluid rounded-circle me-3'
                />
              </div>
              <p className='card-text' style={{ marginLeft: "10px" }}>
                {company.name}
              </p>
            </div>
          </>
        )}
        <p className='card-text'>Price: Rs. {price}</p>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }),
  description: PropTypes.string,
  onclickCourse: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
};

export default CourseCard;