export function hash (data: string) {
    const hasher = new Bun.CryptoHasher("sha256");

    hasher.update(data);
   // hasher.digest('hex');

    return hasher.digest('hex');
   // return createHash('sha256').update(data).digest('hex')
}

export function isHashProofed ({ hash, difficulty = 4, prefix = '0' }: { hash: string, difficulty?: number, prefix?: string }) {
    const check = prefix.repeat(difficulty)
    
    return hash.startsWith(check)
}
