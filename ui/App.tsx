import React from 'react';

const landmarks = ['main', 'header', 'nav', 'aside', 'footer'];

export default function App() {
  const tagAs = (type: string) => {
    parent.postMessage(
      {
        pluginMessage: {
          type: 'tag-region',
          value: type,
        },
      },
      '*'
    );
  };

  return (
    <div className="p-4 space-y-2">
      <h2 className="text-lg font-bold mb-3">Landmark Region Tagger</h2>
      {landmarks.map((tag) => (
        <button
          key={tag}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-left"
          onClick={() => tagAs(tag)}
        >
          Tag as &lt;{tag}&gt;
        </button>
      ))}
    </div>
  );
}
