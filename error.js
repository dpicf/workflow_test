
export function error() {
    try {
        const qwe = 6 / 0
        console.log(qwe)
    } catch {
        throw new Error("stop workflow");
    }
}