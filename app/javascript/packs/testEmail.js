require('dotenv').config(); // これを追加します

const mailslurp = require('mailslurp-client').default;

// APIキーの設定を環境変数から取得する
const apiKey = process.env.MAILSLURP_API_KEY;
const api = new mailslurp({ apiKey });

async function testEmail() {
    // 新規メールボックスの作成
    const inbox = await api.createInbox();
    console.log('Created new email address: ', inbox.emailAddress);

    // あなたの確認メールを送信する処理をここに書きます
    // sendConfirmationEmail(inbox.emailAddress);

    // 新しいメールを待つ
    const email = await api.waitForLatestEmail(inbox.id);
    console.log('Received email: ', email.subject);

    // メール内容の確認
    if(email.body.includes('確認コード')) {
        console.log('Test passed!');
    } else {
        console.log('Test failed.');
    }
}

testEmail();
