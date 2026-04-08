
import './client-scripts';
import './business-rules';
import './generated';

// Sample export (optional)
export const init = () => {
console.log('Fluent App Initialized');
};



// 🔥 AI Generated Content
export const sampleClientScript = ClientScript({
$id: Now.ID['sample_client_script'],
name: 'Sample Client Script',
table: 'incident',
type: 'onLoad',
script: `
function onLoad() {
g_form.addInfoMessage('Hello from appended code');
}
`
});


// 🔥 AI Generated Script
Generating script...

// 🔥 AI Generated Script
import { ClientScript } from '@servicenow/sdk/core';

export default ClientScript({
    name: 'Show Welcome Message on Load',
    table: 'incident',
    type: 'onLoad',
    ui_type: 'all',
    active: true,
    script: (g_form, g_user) => {
        g_form.addInfoMessage('Welcome to the Incident form!');
    }
});