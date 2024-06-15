import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import CustomTab from './CustomTab';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, bgcolor: ' #720d5d', color: 'white' }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const theme = useTheme()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', pt: '35px' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'white', background: '#4e0d3a ' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    indicatorColor="primary"
                >
                    <Tab label="Return" {...a11yProps(1)} sx={{ color: theme.palette.tabColor.inactive, '&.Mui-selected': { color: 'white' }, fontSize: theme.palette.tabColor.fontSize, fontWeight: theme.palette.tabColor.fontWeight }} />
                    <Tab label="One Way" {...a11yProps(0)} sx={{ color: theme.palette.tabColor.inactive, '&.Mui-selected': { color: 'white' }, fontSize: theme.palette.tabColor.fontSize, fontWeight: theme.palette.tabColor.fontWeight }} />
                    {/* <Tab label="Multiple City" {...a11yProps(2)} sx={{ color: theme.palette.tabColor.inactive, '&.Mui-selected': { color: 'white' }, fontSize: theme.palette.tabColor.fontSize, fontWeight: theme.palette.tabColor.fontWeight }} /> */}
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={1}>
                <CustomTab r={true}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={0}>
                <CustomTab />
               
            </CustomTabPanel>
            {/* <CustomTabPanel value={value} index={2}>
                <CustomTab/>
            </CustomTabPanel> */}

        </Box>
    );
}