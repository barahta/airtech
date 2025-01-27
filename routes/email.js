const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Маршрут для отправки писем
router.post('/send', async (req, res) => {
    const { myname, phone, recipientEmail } = req.body;
    console.log('Привет')
    if (!myname || !phone || !recipientEmail) {
        return res.status(400).json({ message: 'Заполните все поля' });
    }

    try {
        // Настройка Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'yandex',
            auth: {
                user: 'logotypemonster@yandex.ru',
                pass: 'Barah396525',
            },
        });

        const mailOptions = {
            from: 'logotypemonster@yandex.ru',
            to: recipientEmail,
            subject: 'Новая заявка с сайта',
            text: `Имя: ${myname}\nТелефон: ${phone}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Заявка успешно отправлена' });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        res.status(500).json({ message: 'Ошибка отправки письма' });
    }
});

module.exports = router;
