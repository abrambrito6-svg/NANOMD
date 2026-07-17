let handler = async (m, { conn, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender];
    let mentionedJid = m.quoted?.sender || m.mentions[0];
    if (!mentionedJid) return conn.reply(m.chat, `❌ Menciona al usuario. Ejemplo: *${usedPrefix}transfer @usuario 100*`, m);
    
    let amount = parseInt(args[1]);
    if (isNaN(amount) || amount <= 0) return conn.reply(m.chat, '❌ Cantidad inválida.', m);
    
    let targetUser = global.db.data.users[mentionedJid];
    if (!targetUser) return conn.reply(m.chat, '❌ Usuario no encontrado.', m);
    if ((user.coin || 0) < amount) return conn.reply(m.chat, '❌ No tienes suficientes Yenes.', m);
    
    user.coin -= amount;
    targetUser.coin = (targetUser.coin || 0) + amount;
    
    conn.reply(m.chat, `✅ *TRANSFERENCIA*\nEnviaste ${amount} Yenes a @${mentionedJid.split('@')[0]}\n💰 Tu saldo: ${user.coin} Yenes`, m, { mentions: [mentionedJid] });
};

handler.help = ['transfer'];
handler.tags = ['economy'];
handler.command = ['transfer', 'enviar', 'dar'];

export default handler;
