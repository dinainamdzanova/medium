import React from 'react';
import Grid from '../../../../shared/grid';
import Text from '../../../../shared/text';
import Space from '../../../../shared/space';

const Reel = () => {
    return (
        <div>
            <Space top="50px"/>
        <Grid grid="1fr 1fr 1fr" ggap="40px">
           <div>
            <Text color="rgba(8, 8, 8, 1)" size="14px" weight="400" height="12px">Jessica Wildfire</Text>
            <Space pbottom="15px" />
            <Text color="rgba(8, 8, 8, 1)" size="16px" weight="bold" height="20px">Vladimir Putin Has Already Won, but Nobody Wants to Admit It</Text>
           </div>
           <div>
            <Text color="rgba(8, 8, 8, 1)" size="14px" weight="400" height="12px">Jessica Wildfire</Text>
            <Space pbottom="15px" />
            <Text color="rgba(8, 8, 8, 1)" size="16px" weight="bold" height="20px">Vladimir Putin Has Already Won, but Nobody Wants to Admit It</Text>
           </div>
           <div>
            <Text color="rgba(8, 8, 8, 1)" size="14px" weight="400" height="12px">Jessica Wildfire</Text>
            <Space pbottom="15px" />
            <Text color="rgba(8, 8, 8, 1)" size="16px" weight="bold" height="20px">Vladimir Putin Has Already Won, but Nobody Wants to Admit It</Text>
           </div>
        </Grid>
        </div>
    )
}

export default Reel;