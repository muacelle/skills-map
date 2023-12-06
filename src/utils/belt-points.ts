export function beltPoints(belt: string): number {
    switch(belt) {
        case 'white':
            return 2
        case 'blue':
            return 4
        case 'purple':
            return 7
        case 'brown':
            return 10
        case 'black':
            return 14
    }
    return 0
}