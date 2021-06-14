import * as React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: String
};

//spride operator
const H1Button: React.FC<Props> = ({ text, ...rest }: Props) => {
    return (
        <div>
            <button {...rest}>
                {text}
            </button>
        </div>
    );
};

export default H1Button;