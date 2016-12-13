import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatwindowComponent } from './chatwindow/chatwindow.component';
import { AppComponent } from './app.component'

const appRoutes: Routes = [
    {
        path: 'chatroom/:username',
        component: ChatwindowComponent
    },
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
