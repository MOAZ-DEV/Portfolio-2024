import list from "../../../public/projects.json";
import {readFileSync} from "node:fs";

export default
    defineEventHandler((event) => {

        let result: any,
            CallName = getRouterParam(event, 'url');

        list.forEach(p =>
            p.img === CallName ? () => {
                result = readFileSync(`/${CallName}.png`);
            } : result = "There nothing! Stop scraping..");

        return result;
    })

