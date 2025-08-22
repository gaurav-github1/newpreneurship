
"use client"
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string | undefined>('**Hello world!!!**');

  return (
    <div className="container mx-auto p-4">
      <MDEditor
        value={markdown}
        onChange={setMarkdown}
      />
      <div className="mt-4 p-4 border rounded">
        <MDEditor.Markdown source={markdown} />
      </div>
    </div>
  );
};

export default MarkdownEditor;
