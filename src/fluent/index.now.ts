

// 🔥 AI Generated Script
import { ClientScript } from '@servicenow/sdk/core';

export default ClientScript({
    $id: Now.ID['srg_onload_client'],
    name: 'Show Welcome Message on Incident',
    table: 'incident',
    type: 'onLoad',
    ui_type: 'all',
    active: true,
    script: `
function onLoad() {
    g_form.addInfoMessage('Welcome to the Incident form!');
}
`,
});