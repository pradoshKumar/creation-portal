import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent, OfflineHelpCenterComponent, LibraryComponent, DesktopExploreContentComponent } from './components';
const routes: Routes = [
    {
        path: 'browse', component: BrowseComponent, data: {
            telemetry: {
                env: 'offline', pageid: 'browse', type: 'view'
            },
            softConstraints: { badgeAssertions: 98, board: 99, channel: 100 }
        }
    },
    {
        path: 'help-center', component: OfflineHelpCenterComponent, data: {
            telemetry: {
                env: 'help', pageid: 'help', type: 'view'
            }
        }
    },
    {
        path: 'browse/search/:pageNumber', component: DesktopExploreContentComponent, data: {
            telemetry: {
                env: 'offline', pageid: 'browse-search', type: 'view', subtype: 'paginate'
            },
            softConstraints: { badgeAssertions: 98, board: 99, channel: 100 }
        }
    },
    {
        path: 'view-all', component: DesktopExploreContentComponent,
        data: {
            telemetry: {
                env: 'offline', pageid: 'view-all', type: 'view', subtype: 'paginate'
            },
            filterType: 'explore',
            softConstraints: { badgeAssertions: 98, board: 99, channel: 100 },
            applyMode: true
        }
    },
    {
        path: 'search', component: DesktopExploreContentComponent, data: {
            telemetry: {
                env: 'offline', pageid: 'library-search', type: 'view', subtype: 'paginate'
            },
            softConstraints: { badgeAssertions: 98, board: 99, channel: 100 }
        }
    },
    {
        path: 'get', loadChildren: './../../../../../../src/app/modules/dial-code-search/dial-code-search.module#DialCodeSearchModule'
    },
    {
        path: 'browse/get',
        loadChildren: './../../../../../../src/app/modules/dial-code-search/dial-code-search.module#DialCodeSearchModule'
    },
    {
        path: '', component: LibraryComponent, data: {
            telemetry: {
                env: 'offline', pageid: 'library', type: 'view'
            },
            softConstraints: { badgeAssertions: 98, board: 99, channel: 100 }
        }
    },
    {
        path: ':slug/explore', loadChildren: './../../../../../../src/app/modules/public/module/explore/explore.module#ExploreModule'
    },
    {
        path: 'play', loadChildren: './../../../../../../src/app/modules/public/module/player/player.module#PlayerModule'
    },
    {
        path: 'browse/play', loadChildren: './../../../../../../src/app/modules/public/module/player/player.module#PlayerModule'
    }];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OfflineRoutingModule { }
