import React, { Component } from "react";

class FileViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFiles: [],
            selectedHTMLFile: null,
        };
    }

    handleFileSelect = (event) => {
        const files = event.target.files;
        const htmlFiles = Array.from(files).filter((file) =>
            file.name.toLowerCase().endsWith(".html")
        );

        this.setState({ selectedFiles: htmlFiles, selectedHTMLFile: null });
    };

    handleDisplayHTML = () => {
        if (this.state.selectedFiles.length >= 5) {
            const fifthHTMLFile = this.state.selectedFiles[4];
            this.setState({ selectedHTMLFile: fifthHTMLFile });
        } else {
            this.setState({ selectedHTMLFile: null });
        }
    };

    render() {
        return (
            <div>
                <input type="file" multiple onChange={this.handleFileSelect} accept=".html" />

                <button onClick={this.handleDisplayHTML}>5번째 HTML 파일 표시</button>

                {this.state.selectedHTMLFile && (
                    <iframe
                        title="HTML Preview"
                        src={URL.createObjectURL(this.state.selectedHTMLFile)}
                        width="100%"
                        height="400"
                    />
                )}
            </div>
        );
    }
}

export default FileViewer;
