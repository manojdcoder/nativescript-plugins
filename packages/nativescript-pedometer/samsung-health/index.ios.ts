import { Common } from "./common";

export class SamsungHealth extends Common {
    constructor() {
        super();
        console.error("SamsungHealth is only supported on Android");
    }
}