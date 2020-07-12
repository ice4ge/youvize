import { Image } from 'react-native';

export type ProfileModel = {
    fullName: string;
    imageUrl: Image;
    about: string;
    address: string;
    hourly: number;
    feedback: number;
    successRate: number;
    skills: string[];
    aboutBIo: aboutBioType;
    education?: educationType[];
    availability?: availabilityType[];
};

export type aboutBioType = {
    title?: string;
    content?: string;
    videoUrl?: string;
    verifications?: object[];
    workHistory?: workHistoryType[];
}

export type workHistoryType = {
    rate?: number;
    duration?: string;
    title?: string;
    content?: string;
    earned?: number;
    hours?: number;
    hourly?: number;
}

export type educationType = {
    type?: string,
    title?: string,
    verified?: boolean,
    content?: string,
}

export type availabilityType = {
    day: string,
    from?: string,
    to?: string,
}
