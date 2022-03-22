import React from 'react';

import Container from '../../shared/container';
import Flex from '../../shared/flex';
import Space from '../../shared/space';
import Text from '../../shared/text';
import Fon from './style.js';
import Reel from './components/reel';
import image from '../../assets/images/ill.png';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import AuthPage from '../AuthPage';
import LoginPage from '../AuthPage/components/loginPage';

const HomePage = (children) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Fon>
                        <Container width="1250px" margin="0 auto">
                            <Flex items="center" content="space-between">
                                <div>
                                    <Space ptop="70px" />
                                    <Text color="rgba(8, 8, 8, 1)" size="66px" weight="400" height="70px">Medium is a place to write, read, and connect</Text>
                                    <Space pbottom="35px" />
                                    <Text color="rgba(41, 41, 41, 1)" size="22px" weight="400" height="24px">It's easy and free to post your thinking on any <br /> topic and connect with millions of readers.</Text>
                                    <Space pbottom="45px" />
                                    <Link className="link" to="/signup">Sign up</Link>
                                </div>
                                <div>
                                    <Space ptop="60px" />
                                    <img src={image} alt="" />
                                    <Space pbottom="60px" />
                                </div>
                            </Flex>
                        </Container>
                    </Fon>
                    <Container width="1250px" margin="0 auto">
                        <Reel>{children}</Reel>
                    </Container>
                </Route>
                <Route exact path="/signup" component={AuthPage} />
                <Route exact path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default HomePage;