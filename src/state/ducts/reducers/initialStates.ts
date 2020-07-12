import {ProfileModel} from '../../../models/ProfileModel';

export const initialProfileData: ProfileModel = {
    fullName: 'Tony Stark',
    imageUrl: require('../../../assets/avatar.jpg'),
    about: "about text is here",
    address: "Los Angeles, CA",
    hourly: 2.49,
    feedback: 5,
    successRate: 90,
    skills: [
        "Figma",
        "Sketch",
        "UI Design",
        "wireframes",
        "Prototyping",
        "User Flows",
    ],
    aboutBIo: {
        title: "Rockstar Product UI/UX Designer",
        content: `Hi, My name is Tony Stark! I'm from California, USA.
I'm seasoned professional with 12+ years of experience web and mobile UI/UX design, 4 years of Product Design, 8+ years team management in own, intl and California, USA companies.  Hi, My name is Tony Stark! I'm from California, USA.  I'm seasoned professional with 12+ years of experience web and mobile UI/UX design, 4 years of Product Design, 8+ years team management in own, international and California, USA companies.`,
        videoUrl: 'http://video.com/video.mp4',
        verifications: [
            {
                item: "English",
                verification: "Fluent",
                checked: true,
                result: "",
            },
            {
                item: "Russian",
                verification: "Native or Billingual",
                checked: true,
                result: "",
            },
            {
                item: "Phone Number",
                verification: "",
                checked: true,
                result: "Verified",
            }
        ],
        workHistory: [
            {
                rate: 5,
                duration: "Nov 2018-Sep2019",
                title: "Upwork Redesign Project",
                content: "Very talented. Completed task according to specification.",
                earned: 1480,
                hours: 39,
                hourly: 45,
            },
            {
                rate: 5,
                duration: "Nov 2018-Sep2019",
                title: "Freelancer Redesign Project",
                content: "Very talented. Completed task according to specification.",
                earned: 1480,
                hours: 39,
                hourly: 45,
            },
        ],
    },
    education: [
        {
            type: "university",
            title: "BS, Business Economics",
            verified: true,
            content: "University of Youvize",
        },
        {
            type: "university",
            title: "PhD, Quantum Physics",
            verified: true,
            content: "Stanford University",
        },
        {
            type: "certification",
            title: "California Reacl Estate Brokers",
            verified: true,
            content: "Licence",
        },
        {
            type: "certification",
            title: "PMP Project Management",
            verified: false,
            content: "Certification",
        },
    ],
    availability: [
        {
            day: "Sunday",
            from: "10:00 am",
            to: "6:00 pm",
        },
        {
            day: "Monday",
        },
        {
            day: "Tuesday",
            from: "10:00 am",
            to: "6:00 pm",
        },
        {
            day: "Wednesday",
        },
        {
            day: "Thurday",
        },
        {
            day: "Friday",
        },
        {
            day: "Saturday",
        },
    ]
}
