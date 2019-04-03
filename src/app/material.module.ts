import { NgModule } from '@angular/core';
import {
    MatBadgeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule
    ],
    exports: [
        MatBadgeModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule
    ]
})

export class MaterialModule {}