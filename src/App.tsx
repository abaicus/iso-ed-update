import IsolatedBlockEditor from '@automattic/isolated-block-editor';
import React from 'react';

function App() {

  const defaultCallback = () => {
    console.log('default');
  }

  return (
    <div className="App">
      {/* @ts-ignore */}
      <IsolatedBlockEditor
        settings={{}}
        onSaveBlocks={defaultCallback}
        onSaveContent={defaultCallback}
        onError={defaultCallback}
      />
    </div>
  );
}

export default App;

/**
 * 
 * @param {Object} props - Component props
 * @param {OnSaveBlocks} [props.onSaveBlocks] - Save callback
 * @param {OnSaveContent} [props.onSaveContent] - Save callback
 * @param {OnError} props.onError - Error callback
 * @param {OnLoad} [props.onLoad] - Initial blocks
 * @param {BlockEditorSettings} props.settings - Settings
 * @param {Object} [props.children] - Child content
 * @param {string} [props.className] - Additional class name
 * @param {OnMore} [props.renderMoreMenu] - Callback to render additional items in the more menu
 * @param {UndoManager} [props.__experimentalUndoManager] - Undo manager
 * @param {OnUpdate} [props.__experimentalOnInput] - Gutenberg's onInput callback
 * @param {OnUpdate} [props.__experimentalOnChange] - Gutenberg's onChange callback
 * @param {OnSelect} [props.__experimentalOnSelection] - Callback to run when the editor selection changes
 * @param {object[]} [props.__experimentalValue] - Gutenberg's value
 * 
 */