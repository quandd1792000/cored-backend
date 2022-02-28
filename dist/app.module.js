"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./module/auth/auth.module");
const users_module_1 = require("./module/users/users.module");
const payments_module_1 = require("./module/payment-settings/payments.module");
const invoices_module_1 = require("./module/invoices/invoices.module");
const companies_module_1 = require("./module/companies/companies.module");
const sms_otp_module_1 = require("./module/sms-otp/sms-otp.module");
const help_center_module_1 = require("./module/help-center/help-center.module");
const typeOrmConfig = require("./typeorm.config");
const term_of_service_module_1 = require("./module/term-of-service/term-of-service.module");
const bank_transfer_module_1 = require("./module/bank-transfer/bank-transfer.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeOrmConfig),
            core_1.RouterModule.register([
                {
                    path: 'api/v1/auth',
                    module: auth_module_1.AuthModule,
                },
            ]),
            auth_module_1.AuthModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: users_module_1.UsersModule,
                },
            ]),
            users_module_1.UsersModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: payments_module_1.PaymentsModule,
                },
            ]),
            payments_module_1.PaymentsModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: invoices_module_1.InvoicesModule,
                },
            ]),
            invoices_module_1.InvoicesModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: companies_module_1.CompaniesModule,
                },
            ]),
            companies_module_1.CompaniesModule,
            sms_otp_module_1.SmsOtpModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: help_center_module_1.HelpCenterModule,
                },
            ]),
            help_center_module_1.HelpCenterModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: term_of_service_module_1.TermOfServiceModule,
                },
            ]),
            term_of_service_module_1.TermOfServiceModule,
            core_1.RouterModule.register([
                {
                    path: 'api/v1/',
                    module: bank_transfer_module_1.BankTransferModule,
                },
            ]),
            bank_transfer_module_1.BankTransferModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map