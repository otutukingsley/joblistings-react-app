import React from 'react';

const JobsItem = ({eachJob, filterTags}) => {

    const {logo, company, position, postedAt, contract, location, languages, tools, role, level, isnew, featured} = eachJob

    const tags = [role, level]

    if(languages){
        tags.push(...languages)
    }

    if(tools){
        tags.push(...tools)
    }

    return (
        <div className="jobs-item">
            <div className="jobs-column jobs-column-left">
                <img src={logo} alt={company} className="jobs-img"/>
                <div className="jobs-info">
                    <span className="jobs-company">{company}</span>
                    {isnew && <span className="new">New!</span>}
                    {featured && <span className="featured">Featured</span>}
                    <p className="jobs-title">{position}</p>
                    <ul className="job-details">
                        <li className="job-details-item">
                            {postedAt}
                        </li>
                        <li className="job-details-item">
                            {contract}
                        </li>
                        <li className="job-details-item">
                        {location}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="border"></div>
            <div class="jobs-column-right">
                {tags ? tags.map((tag, key) =>
                <span className="tag" onClick={() => filterTags(tag)} key={key}>{tag}</span> 
                ) : ''}
            </div>
        </div>
    );
};

export default JobsItem;
