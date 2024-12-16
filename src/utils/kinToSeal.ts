export default function kinToSeal(kin: number): number {
    let sealNumber = kin;

    while(sealNumber > 19){
        sealNumber -= 20;
    };

    return sealNumber;
}