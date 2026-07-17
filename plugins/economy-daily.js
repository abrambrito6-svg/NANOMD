import fs from 'fs';

let handler = async (m, { conn, usedPrefix, command }) => {
    let user = global.db.data.users[m.sender];
    let now = Date.now();
    let cooldown = 86400000; // 24 horas

    if (user.lastclaim && now - user.lastclaim < cooldown) {
        let remaining = Math.ceil((cooldown - (now - user.lastclaim)) / 3600000);
        return conn.reply(m.chat, `⏰ Ya reclamaste hoy. Vuelve en *${remaining} hora(s)*.`, m);
    }

    let reward = 500;
    user.coin = (user.coin || 0) + reward;
    user.lastclaim = now;

    conn.reply(m.chat, `🎉 *RECOMPENSA DIARIA*\n\n+${reward} Yenes\n💰 Saldo: ${user.coin} Yenes`, m);
};

handler.help = ['daily'];
handler.tags = ['economy'];
handler.command = ['daily', 'reclamar'];

export default handler;
