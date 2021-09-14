import React from 'react';
import JobsItem from './JobsItem';

const Jobs = ({ jobs, tagFilter }) => {
    return (
        <div className="jobs">
            {jobs.length === 0 ? <p>Jobs Loading...</p>
            : jobs.map((job) => <JobsItem key={job.id} eachJob={job} filterTags={tagFilter}/>)
        }
        </div>
    );
};

export default Jobs;
