module.exports = (client) => {
    console.log(
        `Ready to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`
    );
    // Kado Tarafından Yapılmıştır.
    const activities = [`Mitsuki in ${client.guilds.cache.size} guilds`, "!help", `${client.users.cache.size} users!`];
    setInterval(() => {
        let activity = activities[Math.floor(Math.random() * activities.length)];
        client.user.setActivity(activity, { type: "WATCHING" });
    }, 20000);

};