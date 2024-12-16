export default function kinToTone(kin: number): number {
    let toneNumber = kin;

    while(toneNumber > 13){
        toneNumber -= 13;
    }
    
    return toneNumber;
}