import * as React from 'react';

const H1List: React.FC<{ data: string[] }> = ({ data }) => {
    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {
                    data.map(item => <li>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default H1List;