import React from "react";
import { RWebShare } from "react-web-share";
const Share = (props) => {
    return (
        <RWebShare
            data={{
                text: props.text,
                texts: props.text,
                url: props.url,
                title: "News Explorar",
            }}
            sites={['whatsapp', 'facebook', 'twitter', 'copy', 'reddit', 'telegram', 'linkedin', 'mail', 'vk', 'okru']}
            onClick={() => console.log("shared successfully!")}
        >
            <div className="button">Share 🔗</div>
        </RWebShare>
    );
};

export default Share;