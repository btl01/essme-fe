// Generated by https://quicktype.io

export interface Experts {
    score:         number;
    _id:           string;
    image:         string;
    other_link:    string;
    address:       any;
    gender:        number;
    degree:        string;
    birth:         string;
    phone:         string;
    name:          string;
    research_area: any;
    company:       string;
    location:      Location;
    email:         string;
    link_profile:  string;
    uid:           string;
}

export interface Location {
    features: Feature[];
    type:     string;
}

export interface Feature {
    geometry:   Geometry;
    type:       string;
    properties: Properties;
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    street: string;
}
