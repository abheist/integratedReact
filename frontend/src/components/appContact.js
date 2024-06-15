import React, {useState} from 'react';

const AppContact = ({helloAbhishek}) => {
    const [state, setState] = useState(() => 'Hey Abhishek!');

    return (
        <div>
            <h1>Hello, Contact Page!</h1>
            <div>
                <p><b>Variable from Django:</b> {helloAbhishek}</p>
                <p><b>Variable from React:</b> {state}</p>
            </div>
        </div>
    );
};

export default AppContact;