import * as actions from "./protologic/actions";
import * as queries from "./protologic/queries";
import * as constants from "./protologic/constant";
import * as wasi from "./protologic/wasi";

export function tick(): void {
    console.log("tick");
}
