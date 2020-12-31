function maxWealth(accounts) {
    return accounts.reduce((acc, val) => {
        const result = val.reduce((acc, val) => acc + val, 0)
        return Math.max(result, acc)
    }, 0)
}