export class Shift {
    id: string = null;
    start: number;
    finish: number;
    breakTime: number = 0;
    constructor(id: string, start: number, finish: number, breakTime?: number) {
        this.id = id;
        this.start = start;
        this.finish = finish;
        this.breakTime = breakTime;
    }
    getDisplayText(): string {
        let text = "";
        let startHours = Math.floor(this.start / 60).toString();
        let startMinutes =  ((this.start % 60).toString().length === 1 ? "0" + (this.start % 60).toString() : (this.start % 60).toString())
        let finishHours = Math.floor(this.finish / 60).toString();
        let finishMinutes =  ((this.finish % 60).toString().length === 1 ? "0" + (this.finish % 60).toString() : (this.finish % 60).toString())
        text += startHours + ":" + startMinutes + "-" + finishHours + ":" + finishMinutes;
        text += this.breakTime ? ("(" + this.breakTime + ")") : "";
        return text;
    }
}