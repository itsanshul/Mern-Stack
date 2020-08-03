import React from 'react';
import Moment from 'react-moment';
import { deleteEducation } from '../../actions/profile';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((ed) => (
    <tr key={ed._id}>
      <td>{ed.school}</td>
      <td className='hide-sm'>{ed.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{ed.from}</Moment> {' - '}
        {ed.to !== '' ? <Moment format='YYYY/MM/DD'>{ed.to}</Moment> : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(ed._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
};
Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
};
export default connect(null, { deleteEducation })(Education);
