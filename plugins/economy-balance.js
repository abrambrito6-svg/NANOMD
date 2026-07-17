let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let balance = user.coin || 0;
    conn.reply(m.chat, `💰 *TU SALDO*\n\nYenes: ${balance}\n\nUsa *#work* para ganar más.`, m);
};

handler.help = ['balance'];
handler.tags = ['economy'];
handler.command = ['balance', 'bal', 'dinero'];

export default handler;
