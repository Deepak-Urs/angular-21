import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControlFlow } from './components/control-flow/control-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { Signals } from './components/signals/signals';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: Signals
    },
];
