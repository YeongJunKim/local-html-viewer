import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExternalHTMLLoaderIframe() {
    return (
        <div>
            <iframe src="./../data/1_1_point_0_npts_10_result.html" width="100%" height="500" title="External HTML"></iframe>
        </div>
    );
}

function ExternalHTMLLoaderAXIO() {
    const [externalHTML, setExternalHTML] = useState('');

    useEffect(() => {
        axios.get("./../data/1_1_point_0_npts_10_result.html")
            .then(response => {
                setExternalHTML(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: externalHTML }}></div>
        </div>
    );
}

const defaults = {ExternalHTMLLoaderAXIO, ExternalHTMLLoaderIframe};
export default defaults;