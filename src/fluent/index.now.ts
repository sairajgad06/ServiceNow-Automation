

// 🔥 AI Generated Script


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


// 🔥 AI Generated Script
BusinessRule({
    $id: Now.ID['srg_testing_br'],
    name: 'SRG testing business rule',
    table: 'incident',
    when: 'before',
    action: ['insert', 'update'],
    filterCondition: 'stateCHANGESTO7',
    script: `(function executeRule(current, previous /*null when async*/) {
	// Logic goes here
})(current, previous);`,
})