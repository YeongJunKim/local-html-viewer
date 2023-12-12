import React, { useState } from 'react';
import { useReactTable } from '@tanstack/react-table'

function FileExplorer({ onFileSelect }) {
  const handleFolderSelection = async (e) => {
    const folder = e.target.files[0];
    // const table = useReactTable
    if (folder) {
      const fileArray = [];
      const entries = await folder.getEntries();
      for await (const entry of entries) {
        if (entry.isFile && entry.name.endsWith('.html')) {
          fileArray.push(entry);
        }
      }
      onFileSelect(fileArray);
    }
  };

  return (
    <div>
      <input
        type="file"
        webkitdirectory=""
        directory=""
        onChange={handleFolderSelection}
      />
    </div>
  );
}

export default FileExplorer;