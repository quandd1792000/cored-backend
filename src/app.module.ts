import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';
import { PaymentsModule } from './module/payment-settings/payments.module';
import { InvoicesModule } from './module/invoices/invoices.module';
import { CompaniesModule } from './module/companies/companies.module';
import { SmsOtpModule } from './module/sms-otp/sms-otp.module';
import { HelpCenterModule } from './module/help-center/help-center.module';
import * as typeOrmConfig from './typeorm.config';
import { TermOfServiceModule } from './module/term-of-service/term-of-service.module';
import { BankTransferModule } from './module/bank-transfer/bank-transfer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),

    RouterModule.register([
      {
        path: 'api/v1/auth',
        module: AuthModule,
      },
    ]),
    AuthModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: UsersModule,
      },
    ]),
    UsersModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: PaymentsModule,
      },
    ]),
    PaymentsModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: InvoicesModule,
      },
    ]),
    InvoicesModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: CompaniesModule,
      },
    ]),
    CompaniesModule,
    SmsOtpModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: HelpCenterModule,
      },
    ]),
    HelpCenterModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: TermOfServiceModule,
      },
    ]),
    TermOfServiceModule,
    RouterModule.register([
      {
        path: 'api/v1/',
        module: BankTransferModule,
      },
    ]),
    BankTransferModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
