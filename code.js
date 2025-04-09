"use strict";
figma.showUI(__html__, { height: 400, width: 300 });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'tag-region') {
        const selection = figma.currentPage.selection[0];
        if (selection) {
            selection.setPluginData('landmark', msg.value);
            figma.notify(`Tagged as <${msg.value}>`);
        }
        else {
            figma.notify('Please select a frame first.');
        }
    }
};
