import React from "react";
import { EmailIcon, LinkedInIcon } from '../icons'


export default function Info() {
    return (
        <div className="info">
            <img src="https://avatars.githubusercontent.com/u/6010217?s=400&u=86062210d3cf70024214e695ea32d280b1cdfa0b&v=4" className="profile" />
            <h1 className="profile-name">PATRICK WALUKAGGA</h1>
            <h3 className="profile-title">Backend Engineer (Python-Django)/Data Scientist/Data Engineer</h3>
            <h4 className="profile-website">patrickcmd.io</h4>
            <div className="profile-contact">
                <button type="button" className="profile-contact-email top-btn">
                   <EmailIcon /> Email
                </button>
                <button type="button" className="profile-contact-linkedin top-btn">
                    <LinkedInIcon /> LinkedIn
                </button>
            </div>
        </div>
    )
}
