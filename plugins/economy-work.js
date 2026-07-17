let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let now = Date.now();
    let cooldown = 3600000; // 1 hora

    if (user.lastwork && now - user.lastwork < cooldown) {
        let remaining = Math.ceil((cooldown - (now - user.lastwork)) / 60000);
        return conn.reply(m.chat, `😴 Ya trabajaste. Descansa *${remaining} min* más.`, m);
    }

    let earnings = Math.floor(Math.random() * 500) + 200; // 200-700
    user.coin = (user.coin || 0) + earnings;
    user.lastwork = now;

    conn.reply(m.chat, `💼 *TRABAJO COMPLETADO*\n\n+${earnings} Yenes\n💰 Saldo: ${user.coin} Yenes`, m);
};

handler.help = ['work'];
handler.tags = ['economy'];
handler.command = ['work', 'trabajar'];

export default handler;
