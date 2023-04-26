// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

figma.ui.resize(500,500);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

// figma.ui.onmessage = pluginMessage  => {
//     console.log(pluginMessage.name);
//     console.log(pluginMessage.darkModeState);

// }

// const openAIApiResult = api+return;


figma.ui.onmessage = (msg: { type: string; colorResult: string; typeResult: string; buttonResult: string;}) => {
  if (msg.type === 'submit') {
    // Extract recommendationText from the message
    const colorResponse = msg.colorResult;
    const typeResponse = msg.typeResult;
    const buttonResponse = msg.buttonResult;


    console.log("new")

    console.log("code.ts")
    console.log(colorResponse);
    console.log(typeResponse);
    console.log(buttonResponse);


    
    figma.closePlugin();
  }
};
