import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const error = useRouteError();

    return (
        <div>
            <div className='text-center'>
                <h1>Ops! An Error Ocurred!</h1>
                <br />
                {error && (
                    <div className='text-center'>
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p>{error.status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorElement;