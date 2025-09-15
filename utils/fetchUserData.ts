export function fetchUserData(userId: number): Promise<{ id: number; name: string }> {
    return new Promise((resolve, reject) => {
        if (typeof userId !== 'number') {
            reject(new Error('Invalid id'));
        }
        setTimeout(() => {
            resolve({ id: userId, name: `User${userId}` });
        }, 1000);
    });
}
