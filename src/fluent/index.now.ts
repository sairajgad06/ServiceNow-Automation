
// 🔥 AI Generated Script
import { ClientScript, BusinessRule} from '@servicenow/sdk/core';

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

// 🔥 AI Generated Script
ClientScript({
    $id: Now.ID['incident_state_change_alert'],
    name: 'Incident State Change Alert',
    table: 'incident',
    active: true,
    appliesExtended: false,
    global: true,
    uiType: 'all',
    messages: '',
    description: 'Alert user when incident state changes',
    isolateScript: false,
    type: 'onChange',
    field: 'state',
    script: `
    function onChange(control, oldValue, newValue, isLoading, isTemplate) {
        if (isLoading || newValue === '' || newValue === oldValue) {
            return;
        }
        alert('You are changing the state of the incident');
    }
    `,
})