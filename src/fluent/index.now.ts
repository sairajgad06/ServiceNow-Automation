

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
import { BusinessRule } from '@servicenow/sdk/core';

export default BusinessRule({
    name: 'SRG testing business rule',
    table: 'incident',
    when: 'before',
    insert: true,
    update: true,
    filter_condition: 'stateCHANGESTO7', // Assuming 7 is the value for 'Closed/Complete'
    script: (current, previous) => {
        // Business logic here
    },
});

// 🔥 AI Generated Script
import { BusinessRule } from '@servicenow/sdk/core';

export default BusinessRule({
    $id: Now.ID['srg_testing_business_rule'],
    name: 'SRG testing business rule',
    table: 'incident',
    active: true,
    when: 'before',
    insert: true,
    update: true,
    condition: "current.state.changesTo('6')",
    script: `(function executeRule(current, previous /*null when async*/) {
    // Logic for SRG testing business rule
})(current, previous);`
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