// 简单的随机抽取逻辑
function drawChallenge(data) {
    let conditions = [...data.conditions];
    let punishments = [...data.punishments];
    let results = [];

    for (let i = 0; i < 4; i++) {
        // 随机抽一个条件并从数组移除（防止重复）
        let condIndex = Math.floor(Math.random() * conditions.length);
        let cond = conditions.splice(condIndex, 1)[0];

        // 随机抽一个惩罚并从数组移除
        let punIndex = Math.floor(Math.random() * punishments.length);
        let pun = punishments.splice(punIndex, 1)[0];

        results.push({
            player: i + 1,
            challenge: `【条件】${cond} + 【惩罚】${pun}`
        });
    }
    return results;
}
