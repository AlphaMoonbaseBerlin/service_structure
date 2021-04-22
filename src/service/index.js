let target_modules = [];
import store from '../store';

let data_export = {
    store : store,
};

const context = require.context('@/service', true, /.js/);

context.keys().forEach((filename) => {
    const module_path_list = filename.split('/')
    if (module_path_list.length < 3) { return; }
    const module_name = module_path_list[1];
    target_modules.push( module_name );
});

for (const module_name of target_modules) {
    data_export[module_name] = require( `./${module_name}`).default;
    data_export[module_name].services = data_export;
    if (data_export[module_name].state != null) {
        data_export.store.registerModule( module_name, {state : data_export[module_name].state} );
        data_export[module_name].state = data_export.store.state[module_name];
    }
}

export default data_export;