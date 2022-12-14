import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/create-notifications-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification };
  }
}
