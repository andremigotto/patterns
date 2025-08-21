class EmailService {
    sendEmail(to, message) {
        console.log(`Sending email to: ${to}`);
        console.log(`Message: ${message}`);
    }
}

class SMSService {
    sendSMS(to, message) {
        console.log(`Sending SMS to: ${to}`);
        console.log(`Message: ${message}`);
    }
}

class PushNotificationService {
    sendPushNotification(to, message) {
        console.log(`Sending push notification to: ${to}`);
        console.log(`Message: ${message}`);
    }
}

class NotificationFacade {
    constructor() {
        this.emailService = new EmailService();
        this.smsService = new SMSService();
        this.pushNotificationService = new PushNotificationService();
    }

    sendNotification(notificationType, to, subject, body, message) {
        switch (notificationType) {
            case 'email':
                this.emailService.sendEmail(to, subject, body);
                break;
            case 'sms':
                this.smsService.sendSMS(to, message);
                break;
            case 'push':
                this.pushNotificationService.sendPushNotification(to, message);
                break;
            default:
                console.log('Invalid notification type');
        }
    }
}

const notificationFacade = new NotificationFacade();

notificationFacade.sendNotification('push', 'john.doe@example.com', 'Hello John');
