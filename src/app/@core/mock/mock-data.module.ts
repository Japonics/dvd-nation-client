import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserService} from './users.service';
import {SmartTableService} from './smart-table.service';
import {UserActivityService} from './user-activity.service';
import {OrdersChartService} from './orders-chart.service';
import {ProfitChartService} from './profit-chart.service';
import {TrafficListService} from './traffic-list.service';
import {PeriodsService} from './periods.service';
import {EarningService} from './earning.service';
import {OrdersProfitChartService} from './orders-profit-chart.service';
import {TrafficBarService} from './traffic-bar.service';
import {ProfitBarAnimationChartService} from './profit-bar-animation-chart.service';
import {TrafficChartService} from './traffic-chart.service';
import {StatsBarService} from './stats-bar.service';
import {StatsProgressBarService} from './stats-progress-bar.service';
import {VisitorsAnalyticsService} from './visitors-analytics.service';

const SERVICES = [
  UserService,
  SmartTableService,
  UserActivityService,
  OrdersChartService,
  ProfitChartService,
  TrafficListService,
  PeriodsService,
  EarningService,
  OrdersProfitChartService,
  TrafficBarService,
  ProfitBarAnimationChartService,
  TrafficChartService,
  StatsBarService,
  StatsProgressBarService,
  VisitorsAnalyticsService,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class MockDataModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MockDataModule,
      providers: [
        ...SERVICES,
      ],
    } as ModuleWithProviders;
  }
}
