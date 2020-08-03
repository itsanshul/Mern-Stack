import React from 'react';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{exp.from}</Moment> {' - '}
        {exp.to !== '' ? <Moment format='YYYY/MM/DD'> {exp.to}</Moment> : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};
Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};
export default connect(null, { deleteExperience })(Experience);
