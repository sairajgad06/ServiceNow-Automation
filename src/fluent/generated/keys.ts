import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'f4aa9484c4a941b99fce777746497782'
                    }
                    incident_state_change_alert: {
                        table: 'sys_script_client'
                        id: '074daf69c8fb48ec97ed7f2f92671238'
                    }
                    incident_test_button: {
                        table: 'sys_ui_action'
                        id: '4c73a0a4ebb24b18870ef043b5851188'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '292d22334ff3458d9e467927c4523046'
                    }
                    srg_onload_client: {
                        table: 'sys_script_client'
                        id: '602f8fab6ce940fdaee491353b14ab4d'
                    }
                    srg_testing_br: {
                        table: 'sys_script'
                        id: 'a2077aef4b924cf6a0d9cc87741b0883'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_page'
                        id: '6b7f1ea63b1a4c61bbbb28c6f4bd7a61'
                        key: {
                            endpoint: 'x_1330175_flowai_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '9bdbef4bcede49029511f4d97c90056d'
                        key: {
                            name: 'x_1330175_flowai/main'
                        }
                    },
                    {
                        table: 'sys_ui_action_role'
                        id: 'cb572aa71aaf4afe8a76681e2d104a4b'
                        key: {
                            sys_ui_action: '4c73a0a4ebb24b18870ef043b5851188'
                            sys_user_role: {
                                id: '2ab8fe0b5209461cb32e741d71f97027'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'eeee1986594b4d908e22f63fb7a17423'
                        key: {
                            name: 'x_1330175_flowai/main.js.map'
                        }
                    },
                ]
            }
        }
    }
}
