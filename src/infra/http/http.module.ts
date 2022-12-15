import { CancelNotification } from '@app/useCases/cancelNotification';
import { CountRecipientNotifications } from '@app/useCases/countRecipientNotifications';
import { GetRecipientNotifications } from '@app/useCases/getRecipientNotifications';
import { ReadNotification } from '@app/useCases/readNotification';
import { UnreadNotification } from '@app/useCases/unreadNotification';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
