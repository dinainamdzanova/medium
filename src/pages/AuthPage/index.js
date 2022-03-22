import React from 'react';

import Flex from '../../shared/flex';
import Space from '../../shared/space';
import { Link } from 'react-router-dom';

import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const AuthPage = () => {
    return (
        <Flex items="center" position="absolute" direction="column" backColor="white" padding="70px 70px" top="50%" left="50%" transform="translate(-50%, -50%)">
                <Input
                    labelPlaceholder="Full Name"
                    status="Your name"
                />
                <Space pbottom="45px" />
                <Input
                    labelPlaceholder="Surname"
                    status="Your surname"
                />
                <Space pbottom="45px" />
                <Input
                    labelPlaceholder="Email"
                    status="Your email"
                />
                <Space pbottom="45px" />
                <Input
                    labelPlaceholder="Password"
                    status="Your password"
                    type="password"
                />
                <Space pbottom="35px" />
                <Button>Sign up</Button>
                <Link to="/login">Log in</Link>
        </Flex>
    )
}

export default AuthPage;