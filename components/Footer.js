import React from "react";

import { TwitterIcon, FaceBookIcon, InstagramIcon, GithubIcon } from '../icons';

export default function Footer() {
    return (
        <div className="footer">
            <ul className="icons">
                <li>
                    <a href="#" className="fa fa-twitter">
                        <TwitterIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="fa fa-facebook">
                        <FaceBookIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="fa fa-instagram">
                        <InstagramIcon />
                    </a>
                </li>
                <li>
                    <a href="#" className="fa fa-github">
                        <GithubIcon />
                    </a>
                </li>
            </ul>
        </div>
    )
}
