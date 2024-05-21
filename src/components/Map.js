import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

function Map(){
    return (
        <Tabs aria-label="Dates" defaultValue={0} sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
            <TabList sx={{
                p: 1,
                justifyContent: 'center',
                [`&& .${tabClasses.root}`]: {
                    flex: 'initial',
                    bgcolor: 'transparent', '&:hover': {bgcolor: 'background.level1',},
                    [`&.${tabClasses.selected}`]: {
                        color: 'primary.plainColor', '&::after': {
                            height: 2,
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 16,
                            bgcolor: 'primary.500',
                        },
                    },
                },
            }}
            >
                <Tab>First tab</Tab>
                <Tab>Second tab</Tab>
                <Tab>Third tab</Tab>
            </TabList>
            <TabPanel value={0} sx={{width: '100%'}}>
                <b>First</b> tab panel
            </TabPanel>
            <TabPanel value={1}>
                <b>Second</b> tab panel
            </TabPanel>
            <TabPanel value={2}>
                <b>Third</b> tab panel
            </TabPanel>
        </Tabs>
    );
}

export default Map