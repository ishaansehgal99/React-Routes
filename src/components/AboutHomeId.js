import React from 'react'
const AboutHomeId  = ({match}) => {
    return (
        <div>
            <ul>
                <h1>{`${match.params.id}`}</h1>
            </ul>

        </div>
    );
};
export default AboutHomeId;