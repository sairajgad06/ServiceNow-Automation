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
                    package_json: {
                        table: 'sys_module'
                        id: '292d22334ff3458d9e467927c4523046'
                    }
                    srg_onload_client: {
                        table: 'sys_script_client'
                        id: '602f8fab6ce940fdaee491353b14ab4d'
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
