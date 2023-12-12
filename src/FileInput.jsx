import React, { useState, Component } from 'react';

function Upload() {
    const [selectedFiles2, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setSelectedFiles(files);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            {selectedFiles2.length > 0 && (
                <div>
                    <p>선택한 파일 목록:</p>
                    <ul>
                        {Array.from(selectedFiles2).map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

class UploadHTML extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        };
    }

    handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            this.setState({
                selectedFile: file,
            });
        }
    };

    render() {
        const { selectedFile } = this.state;

        let iframeContent = null;
        if (selectedFile) {
            iframeContent = (
                <iframe
                    title="HTML Preview"
                    src={URL.createObjectURL(selectedFile)}
                    width="100%"
                    height="400px"
                />
            );
        }

        return (
            <div>
                <input type="file" accept=".html" onChange={this.handleFileChange} />
                {selectedFile && (
                    <div>
                        <p>선택한 HTML 파일: {selectedFile.name}</p>
                        {iframeContent}
                    </div>
                )}
            </div>
        );
    }
}


export default (Upload, UploadHTML);

