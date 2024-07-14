import Image from "next/image";
import React, { Children, ReactNode } from "react";
import PropTypes from 'prop-types';
import { Tab, Tabs, Typography, Box } from '@mui/material';
import { LearningCard } from "./Card/LearningCard";

type VideoLearningProps = {
    title: string;
    description: string;
};

const videoCourses = [
    {
        id: 1,
        title: "Python",
        description: "Expand your career opportunities with Python.",
        courses: [
            {
                id: 1,
                title: "The Complete Python Bootcamp",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/python/python_1.jpg",
            },
            {
                id: 2,
                title: "The Complete Python Bootcamp",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/python/python_1.jpg",
            },
            {
                id: 3,
                title: "The Complete Python Bootcamp",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/python/python_1.jpg",
            },
            {
                id: 4,
                title: "The Complete Python Bootcamp",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/python/python_1.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Excel",
        description: "Analyze and visualize data with Excel.",
        courses: [
            {
                id: 1,
                title: "Excel Zero to Advance",
                instructor: "Irfan Sharif",
                price: 149000,
                image: "/images/excel/excel_1.jpg",
            },
            {
                id: 2,
                title: "Excel Zero to Advance",
                instructor: "Irfan Sharif",
                price: 149000,
                image: "/images/excel/excel_1.jpg",
            },
            {
                id: 3,
                title: "Excel Zero to Advance",
                instructor: "Irfan Sharif",
                price: 149000,
                image: "/images/excel/excel_1.jpg",
            },
            {
                id: 4,
                title: "Excel Zero to Advance",
                instructor: "Irfan Sharif",
                price: 149000,
                image: "/images/excel/excel_1.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Web Development",
        description: "Build websites and applications with Web Development.",
        courses: [
            {
                id: 1,
                title: "Practical Web Development",
                instructor: "Creative Online School",
                price: 129000,
                image: "/images/web/web_1.jpg",
            },
            {
                id: 2,
                title: "Practical Web Development",
                instructor: "Creative Online School",
                price: 129000,
                image: "/images/web/web_1.jpg",
            },
            {
                id: 3,
                title: "Practical Web Development",
                instructor: "Creative Online School",
                price: 129000,
                image: "/images/web/web_1.jpg",
            },
            {
                id: 4,
                title: "Practical Web Development",
                instructor: "Creative Online School",
                price: 129000,
                image: "/images/web/web_1.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "JavaScript",
        description: "Grow your software development skills with JavaScript.",
        courses: [
            {
                id: 1,
                title: "The Complete JavaScript Course",
                instructor: "Jonas Schmedtmann",
                price: 129000,
                image: "/images/java/java_1.jpg",
            },
            {
                id: 2,
                title: "The Complete JavaScript Course",
                instructor: "Jonas Schmedtmann",
                price: 129000,
                image: "/images/java/java_1.jpg",
            },
            {
                id: 3,
                title: "The Complete JavaScript Course",
                instructor: "Jonas Schmedtmann",
                price: 129000,
                image: "/images/java/java_1.jpg",
            },
            {
                id: 4,
                title: "The Complete JavaScript Course",
                instructor: "Jonas Schmedtmann",
                price: 129000,
                image: "/images/java/java_1.jpg",
            },
        ],
    },
    {
        id: 5,
        title: "Data Science",
        description: "Lead data-driven decisions with Data Science.",
        courses: [
            {
                id: 1,
                title: "Python for Data Science",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/data/data_1.jpg",
            },
            {
                id: 2,
                title: "Python for Data Science",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/data/data_1.jpg",
            },
            {
                id: 3,
                title: "Python for Data Science",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/data/data_1.jpg",
            },
            {
                id: 4,
                title: "Python for Data Science",
                instructor: "Jose Portilla",
                price: 129000,
                image: "/images/data/data_1.jpg",
            },
        ],
    },
];

function TabPanel(props: { children: ReactNode; value: number; index: number }) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    
                    {/* <Typography> */}
                    <div className="tabcontent">
                    {children}
                    </div>
                        
                        {/* </Typography> */}
                    
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

function VideoLearning({ title, description }: VideoLearningProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    return (
        <section className="video-learning">
            <div className="title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <Tabs value={value} onChange={handleChange} aria-label="Video Learning Tabs">
                    {videoCourses.map((course, index) => (
                        <Tab className="tablinks" key={index} label={course.title} />
                    ))}
                </Tabs>

                {videoCourses.map((course, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        {/* <div className="tabcontent"> */}
                        <LearningCard title={course.title} description={course.description} learning={course.courses} />
                        {/* </div> */}
                    </TabPanel>
                ))}
            </div>
        </section>
    )
}

export { VideoLearning };
