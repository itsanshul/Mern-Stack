import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import { ProfileItem } from './ProfileItem';

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className='large text-primary'>Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i> Browse and connect with
            developers
          </p>
          <div className='profiles'>
            {profiles.length > 0
              ? profiles.map((profile, index) => (
                  <ProfileItem key={index} profile={profile} />
                ))
              : 'No Profiles Found'}
          </div>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getAllProfiles: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { getAllProfiles })(Profiles);
