"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const payments_subscriber_1 = require("./module/payment-settings/subscribers/payments.subscriber");
const users_subscriber_1 = require("./module/users/subscribers/users.subscriber");
console.log('process.env', process.env);
const typeOrmConfig = {
    type: 'mongodb',
    url: process.env.MONGODB_DATABASE_URL,
    logger: 'debug',
    subscribers: [payments_subscriber_1.PaymentsSubscriber, users_subscriber_1.UserSubscriber],
    useUnifiedTopology: true,
    synchronize: true,
    useNewUrlParser: true,
    autoLoadEntities: true,
};
module.exports = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map