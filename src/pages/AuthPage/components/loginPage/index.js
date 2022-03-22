import React from 'react';

import { Link } from 'react-router-dom';
import Space from '../../../../shared/space';

import { Input } from '@nextui-org/react';

const LoginPage = () => {
    return (
        <div>
            <Input
                    labelPlaceholder="Email"
                    status="Your email"
                />
                <Space pbottom="35px" />
                <Input
                    labelPlaceholder="Password"
                    status="Your password"
                    type="password"
                />
                <Link className="link" to="/signup">Sign up</Link>
        </div>
    )
}

export default LoginPage;