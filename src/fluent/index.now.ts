

// 🔥 AI Generated Script
import { ClientScript } from '@servicenow/sdk/core';

export default ClientScript({
    name: 'Show Welcome Message on Incident',
    table: 'incident',
    type: 'onLoad',
    ui_type: 'all',
    active: true,
    script: (g_form, g_user) => {
        g_form.addInfoMessage('Welcome to the Incident form!');
    }
});