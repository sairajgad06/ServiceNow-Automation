
// 🔥 AI Generated Script
import { ClientScript, BusinessRule, UiAction} from '@servicenow/sdk/core';

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

// 🔥 AI Generated Script
UiAction({
  $id: Now.ID['incident_test_button'],
  name: 'test button',
  table: 'incident',
  active: true,
  roles: ['admin'],
  form: {
    showButton: true,
    showLink: true,
    showContextMenu: false,
    style: 'destructive',
},
client: {
    isClient: true,
    isUi11Compatible: true,
    isUi16Compatible: true,
    onClick: 'onTestButtonClick()'
  },
  script: `function onTestButtonClick() {
    alert('Test button clicked on incident');
    }`,
})

// 🔥 AI Generated Script
ClientScript({
    $id: Now.ID['validate_dates_record_producer'],
    name: 'Validate End Date After Start Date',
    table: 'incident',
    active: true,
    appliesExtended: false,
    global: true,
    uiType: 'all',
    messages: '',
    description: 'Prevents submission if the end date is earlier than the start date.',
    isolateScript: false,
    type: 'onSubmit',
    script: `
    function onSubmit() {
        var startDate = g_form.getValue('start_date');
        var endDate = g_form.getValue('end_date');

        if (startDate !== '' && endDate !== '') {
            if (endDate < startDate) {
                g_form.addErrorMessage('End date cannot be before start date.');
                return false;
            }
        }
    }
    `,
})

// 🔥 AI Generated Script
ClientScript({
    $id: Now.ID['incident_priority_1_info'],
    name: 'Show Info Message on P1',
    table: 'incident',
    active: true,
    appliesExtended: false,
    global: true,
    uiType: 'all',
    messages: '',
    description: 'Displays an info message if the priority is 1 on form load',
    isolateScript: false,
    type: 'onLoad',
    script: `
        function onLoad() {
            if (g_form.getValue('priority') == '1') {
                g_form.addInfoMessage('This is a Priority 1 incident.');
            }
        }
    `,
})