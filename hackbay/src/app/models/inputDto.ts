export class inputDto {
    public age : number = 5;
    public name : string = 'Emma';
    public daysUntilAppointment : number = 22;
    public daysUntilExamination : number = 10;
    public symptoms : string = "Schmerzen in der Brust";
    public superpower : string = "fliegen";
    public animal : string = "Giraffe";
    public tvShow : string = "Spongebob Schwammkopf";
    public toy : string = "Teddy-Bär";

    public request : string =`
    Schreibe eine Geschichte für ein <AGE>-jähriges Mädchen namens <NAME>, das sich auf eine MRT-Untersuchung vorbereiten muss. 
    Die Geschichte soll das Kind beruhigen und vorbereiten. Das Kind bekommt während der Untersuchung eine Spritze, muss an 
    manchen Stellen die Luft anhalten, still halten und laute Geräusche aushalten.
    
    Protagonist der fiktiven Geschichte ist eine <ANIMAL>, die <SUPERPOWER> als Superkraft hat und viele tolle Geschichten erlebt. 
    Die <ANIMAL> hat wie <NAME> folgende Symptome: <SYMPTOMS>. Das Lieblingsspielzeug soll auch eine wiederkehrende Rolle spielen: 
    ein <TOY>. Außerdem mag <NAME> folgende Serien: <TV-SHOW>.
    
    Die Geschichte soll sich an wichtigen Zeitpunkten der Vorbereitung des Kindes orientieren und folgenden Aufbau haben: 
    1. Titel der Geschichte 
    2. Kapitel 1 (Zweck: Einführung in die Geschichte und spaßige Erlebnisse mit Tier-Freunden) 
    3. Kapitel 2 (Zweck: Wartezeit auf dem Weg zum Krankenhaus überbrücken) 
    4. Kapitel 3 (Zweck: Wartezeit im Krankenhaus überbrücken) 
    5. Kapitel 4: Untersuchung (Zweck: Kind beruhigen)
    
    <NAME> sollte nicht in der Geschichte auftreten, sondern im Hintergrund berücksichtigt werden. 
    Die <ANIMAL> sollte ihren Freunden verschiedene Fragen zum Ablauf der Untersuchung stellen, die diese auch beantworten. 
    Leite bei der Geschichte in Kapitel 1 in zufälliger Reihenfolge auf folgende Trainingsspiele über: 
    1. Spritze erhalten: "Gib der <ANIMAL> eine Spritze und verarzte sie mit einem Pflaster". 
    Nach der Spritze soll die <ANIMAL> ein Schild o.ä. Power-Up haben. Die Spritze soll dabei als Power-Up verstanden werden, 
    aber weiterhin als Spritze verabreicht werden. 
    2. Still halten: 1, 2, 3 um! oder Stopptanz 
    3. Atem anhalten: Luft holen und Atem anhalten, um danach ein Gänseblümchen oder Windrad oder Kerzen auszupusten 
    4. Geräuschkulisse: die Tierfreunde machen Geräusche, um die <ANIMAL> spielerisch vorzubereiten auf das, 
    was in Kapitel 3 folgt und ihr Mut zuzusprechen. 
    In Kapitel 2 und 3 wird auf ein Spiel hingeleitet, durch das die Wartezeit überbrückt werden kann. Beispiele hierfür 
    sind "Ich packe meinen Koffer" als Zeichenspiel, um auszudrücken, was für die Untersuchung mitgenommen wird (z.B. Schuhe). 
    In Kapitel 1 versucht die <ANIMAL> Teil der Superheldenliga zu werden, schafft dies aber wegen ihrer Symptome nicht. 
    Ihre Freunde erklären Ihr, dass eine Untersuchung notwendig ist, um den Grund zu finden und sie nicht aufgeben sollte. 
    Um der Einsamkeit des Kindes im MRT nach Kapitel 3 vorzubeugen und das Kind zu beruhigen, soll die <ANIMAL> während der 
    Untersuchung direkt mit dem Leser sprechen und diesem Mut machen. Es soll an die Übungen zum Still halten erinnern und auf 
    die Musik hinweisen, die im Hintergrund spielen wird. Nach dem MRT weiß die <ANIMAL>, wie sie die Symptome besiegen kann 
    und in die Superheldenliga aufgenommen wird. Nutze euphemistische Synonyme für Begriffe wie das MRT (z.B. Zauberröhre).
    `;

    public createRequest(): string {
        return this.request
        .replaceAll('<AGE>', this.age.toString())
        .replaceAll('<NAME>', this.name)
        .replaceAll('<SYMPTOMS>', this.symptoms)
        .replaceAll('<SUPERPOWER>', this.superpower)
        .replaceAll('<ANIMAL>', this.animal)
        .replaceAll('<TV-SHOW>', this.tvShow)
        .replaceAll('<TOY>', this.toy);
    }
}